import React,{Component} from 'react'
import classes from './About.css'
import TextField  from '@material-ui/core/TextField'
import Button from '../../UI/Button/Button';
class About extends Component{

    state={
        flat:0,
        showHandler:false,
        hovering:false,
        flatDetails:[{0:[]}]

    }

    changeHandler=name=>event=>{
        this.setState({
            [name]:event.target.value
        })
    }
    showHandlerHover=()=>{
        this.setState({
            hovering:!this.state.hovering
        })
    }

    showHandler=()=>{
        this.setState({
            showHandler:!this.state.showHandler
        })

    }
    render(){
        let range =(start, stop, step)=>{
            if (typeof stop == 'undefined') {
                // one param defined
                stop = start;
                start = 0;
            }
        
            if (typeof step == 'undefined') {
                step = 1;
            }
        
            if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
                return [];
            }
        
            var result = [];
            for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
                result.push(i);
            }
        
            return result;
        }
        const floor = [<li key="-1" className={classes.Floor} onMouseEnter={this.showHandlerHover} onMouseLeave={this.showHandlerHover}>Ground Floor</li>];
        for(let [index,value] of range(0,this.state.flat,1).entries()){
            floor.push(<li key={index} className={classes.Floor} onMouseEnter={this.showHandlerHover} onMouseLeave={this.showHandlerHover}> Floor {value+1}</li>)
        }


        let classHover = [classes.Content];
        if(this.state.hovering){
            classHover.push(classes.Show);
        }
        else{
            classHover.push(classes.Close);
        }
        return(
            <div className={classes.About}>
                <span style={{ display: 'block', padding: '10px', borderBottom: '2px solid blueviolet', color: 'blueviolet', textTransform: 'uppercase' }}>Flat Master Registration</span>
                <TextField type="number"
                variant="outlined"
                value={this.state.flat}
                label="Floors"
                style={{
                    width: '90px', height: '50px', textAlign: 'center', margin: '20px', display: 'inline-block'
                }}
                onChange={this.changeHandler("flat")}/>
                <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
                {floor}
                </div>



                <div className={classHover.join(" ")}>
                    <div className={classes.Data}>
                    <TextField 
                    variant="outlined"
                    type="number"
                    value={this.state.flatDetails[this.state.currentFlat]}
                    label="Starts From" 
                    style={{
                        width: '220px', height: '50px', textAlign: 'center', margin: '20px', display: 'inline-block'
                    }}/>
                    <TextField 
                    variant="outlined"
                    type="number"
                    value={this.state.flatDetails[this.state.currentFlat]}
                    label="Ends To" 
                    style={{
                        width: '220px', height: '50px', textAlign: 'center', margin: '20px', display: 'inline-block'
                    }}/>

                    <Button type="Ok" name="Save" style={{width:'220px',padding:'15px',margin:'20px'}}/>
                    
                    
                </div>
</div>

                
            </div>

        );
    }
}

export default About