import React,{Component} from 'react'
import classes from './ShowFloor.css'
import Button from '../../../UI/Button/Button'
class ShowFloor extends Component{
    state={
        floor:this.props.floor
    }

    changeVacany=(index)=>{
        let floor = this.props.floor.flats;
        let vacany = floor[index].vacany
        floor[index].vacany = !vacany;
        this.setState({
            floor:{
                ...this.state.floor,
                flats:floor
            }
        })
        console.log(floor,'changed');
    }

   


    render(){
        let grid = Math.floor(Math.sqrt(this.props.floor.flats.length))
        let layout = 'auto'
        for(let x =0 ;x<grid;x++){
            layout+=' auto'
        }
        console.log(layout)
        let flats=[]
        for(let [index,x] of this.state.floor.flats.entries()){
            flats.push(<div key={index} className={classes.Flat} style={{backgroundColor:x.vacany?'green':'red'}} onClick={()=>{this.changeVacany(index)}}> {x.no} </div>)
        }
        return(

            <div className={classes.Floor} >
            <span style={{color:'blueviolet' ,borderBottom:'2px solid blueviolet',padding:'20px',fontSize:'20px',borderColor:'blueviolet',display:'block'}}> Floor {this.state.floor.no}</span>
            <Button type='Ok' name="Save" style={{width:'70px' ,position:"absolute",top:'0px',right:'0',margin:'10px'}}/>
            <Button type='Edit' name="Edit" style={{width:'70px' ,position:"absolute",top:'0px',right:'90px',margin:'10px'}} click={()=>{this.props.edit(this.state.floor.no)}}/>
            <div style={{display:'grid',gridTemplateColumns:layout}}>
            {flats}
            </div>
            </div>   
        )
    }
}

export default ShowFloor