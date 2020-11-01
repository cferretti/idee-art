const variables = [{
	key : 'technique',
	text : 'Technique'
},{
	key : 'style',
	text : 'Style'
},{
	key : 'support',
	text : 'Support'
},{
	key : 'theme',
	text : 'Theme'
}]

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			variables : variables,
			res : []
		}
	}
	toggleVariable(index) {
		let {variables} = this.state;
		variables[index].checked = !variables[index].checked;
		this.setState({variables : variables}) 
	}
	generate(){
		let {variables, res} = this.state;
		res = [];
		variables.forEach((i) => {
			if(!i.checked) return;
			const max = values[i.key].length - 1;
			const j = Math.floor(Math.random() * (max - 0 + 1) + 0);
			const rdm = values[i.key][j];
			res.push({
				variable : i.text,
				value : rdm
			});
		})	
		this.setState({res : res});
	}
  render() {

  	const resultHTML = (this.state.res && this.state.res.length > 0) ? this.state.res.map((i) => {
		return <p><span class='bold'>{i.variable} :</span> {i.value}</p>
	}) : <p>Choisissez les informations a generer, puis cliquez sur 'Generer !'</p>;

    return (
      <div class='container'>
      	<div class='flex-1 box'>
      	<div class='form'>	
      		<p class='form-title'>Generer avec les information suivantes : </p>
      		<div class='flex-1'>
	      		<ul class='variables'>
	      			{variables.map((i, index) => {
	      				let checkicon = <span class='checkicon fas fa-check-square'></span>;
	      				if(!i.checked){
	      					checkicon = <span class='checkicon fas fa-square'></span>	
	      				}

	      				const liClass =(i.checked) ? 'active' : null;

	      				return <li className={liClass }key={i.key}  onClick={() => { console.log(index, i); this.toggleVariable(index) }}>
		      				<label>
		      					{checkicon}
		      					{i.text}
		      				</label>
		      			</li>
	      			})}
	      		</ul>
      		</div>
      		<button onClick={() => this.generate()}>Generer!</button>
      		</div>
      	</div>
      	<div class='flex-1 box'>
      		<div class='result'>	
      			{resultHTML}
      		</div>
      	</div>		
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

