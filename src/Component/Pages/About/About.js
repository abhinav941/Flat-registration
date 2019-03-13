import React, { Component } from 'react'
import classes from './About.css'
import TextField from '@material-ui/core/TextField'
import Button from '../../UI/Button/Button';
import Form from './Form/Form';
import ShowFloor from './ShowFloor/ShowFloor';
class About extends Component {

    state = {
        flat: 0,
        showHandler: false,
        hovering: false,
        floorDetails: [{ no: 0, flats: [], starts: 0, ends: 0 }],
        error: false,
        set: false,
        currentFlatDetails: 0

    }

    changeHandler = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }

    changeFloorHandler = () => {
        let flats = [];

        for (let i = 0; i < this.state.flat; i++) {
            flats.push({ no: i, flats: [], starts: 0, ends: 0 })
        }
        flats.push({ no: flats.length, flats: [], starts: 0, ends: 0 ,vacany:false})

        console.log(flats)
        this.setState({
            floorDetails: flats,
            set: true
        })
    }


    showHandlerOpen = (index) => {
        this.setState({
            hovering: true,
            currentFlatDetails: index
        })
        console.log(index)
    }
    showHandlerClose = () => {
        this.setState({
            hovering: false
        })
    }

    showHandler = () => {
        this.setState({
            showHandler: !this.state.showHandler
        })

    }

    editClickHandler=(index)=>{
        let floorDetails = [...this.state.floorDetails]
        floorDetails[index].flats = []
        
        this.setState({
            floorDetails:floorDetails
            ,
        })
    }

    addChange = (index, data) => {
        let flats = [...this.state.floorDetails]
        let currentFloor = flats[index]
        currentFloor.flats = data;
        flats[index] = currentFloor;
        this.setState({
            floorDetails: flats
        })
        console.log(flats)
    }
    render() {
        let range = (start, stop, step) => {
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
        const floor = [<li key="-1" className={classes.Floor} onClick={() => { this.showHandlerOpen(0) }} >Ground Floor</li>];
        for (let [index, value] of range(0, this.state.flat, 1).entries()) {
            floor.push(<li key={index} className={classes.Floor} onClick={() => { this.showHandlerOpen(index + 1) }} > Floor {value + 1}</li>)
        }


        let classHover = [classes.Content];
        if (this.state.hovering) {
            classHover.push(classes.Show);
        }
        else {
            classHover.push(classes.Close);
        }
        return (
            <div className={classes.About}>
                <span style={{ display: 'block', padding: '10px', borderBottom: '2px solid blueviolet', color: 'blueviolet', textTransform: 'uppercase' }}>Flat Master Registration</span>
                <TextField type="number"
                    variant="outlined"
                    value={this.state.flat}
                    label="Floors"
                    style={{
                        width: '90px', height: '50px', textAlign: 'center', margin: '20px', display: 'inline-block'
                    }}
                    onChange={this.changeHandler("flat")} />
                <Button type="Ok" name="Save" style={{ width: '100px' }} click={this.changeFloorHandler} />
                {
                    this.state.set ?
                        <>
                        
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                                {floor}
                            </div>
                            {this.state.floorDetails[this.state.currentFlatDetails]["flats"].length === 0 ?
                                <div className={classHover.join(" ")}>
                                    <Form click={this.addChange} index={this.state.currentFlatDetails} />
                                </div>
                                : <ShowFloor floor={this.state.floorDetails[this.state.currentFlatDetails]} edit = {this.editClickHandler}/>}
                        </> : null
                }



            </div>

        );
    }
}

export default About