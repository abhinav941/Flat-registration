import React, { Component } from 'react'
import classes from './Home.css'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { OutlinedInput, InputLabel } from '@material-ui/core';
import Form from '../../Form/Form';
class Home extends Component {

    state = {
        flats: [
            { no: 1, flatDetails: { rooms: 3, latBath: 2, kitchen: 2, location: 'vacany' } },
            { no: 2, flatDetails: { rooms: 5, latBath: 2, kitchen: 3, location: 'sunside' } },
        ],
        owner: 'Add New',
        no: 0,
        flatDetails: { rooms: 0, latBath: 0, kitchen: 0, location: 'some location' }
    }
    onChangeHandler = name => event => {
        this.setState({
            [name]: event.target.value
        })
        this.changeFlatDetails(event.target.value);
    }
    changeFlatDetails = (m) => {
        let flats = [...this.state.flats]
        for (let x in flats) {
            if (flats[x].no == m) {
                this.setState({
                    flatDetails: { ...flats[x].flatDetails }
                })
                console.log("yes")
            }
        }
    }

    render() {
        return (
            <div className={classes.Home}>
                <span style={{ display: 'block', padding: '10px', borderBottom: '2px solid blueviolet', color: 'blueviolet', textTransform: 'uppercase' }}>Flat Owner Registration</span>
                {/* <span style={{border:'2px solid blueviolet',padding:'10px',color:'blueviolet',margin:'10px',display:'inline-block'}}>Flat No</span> */}
                <TextField
                    type="number"
                    label="Flat No."
                    variant="outlined"
                    onChange={this.onChangeHandler("no")}
                    value={this.state.no}
                    style={{
                        width: '90px', height: '50px', textAlign: 'center', margin: '20px', display: 'inline-block'
                    }} />

                <span style={{ display: 'flex', float: 'right', fontSize: '20px', color: 'blueviolet', marginRight: '20%' }}>Flat Details</span>
                <div className={classes.FlatDetails}>
                    <TextField label="No. of Room"
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.flatDetails.rooms}

                        InputProps={{
                            readOnly: true
                        }} />
                    <TextField label="No. of Lat-Baths"
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.flatDetails.latBath}

                        InputProps={{
                            readOnly: true
                        }} />
                    <TextField label="No. of Kitchen"
                        variant="outlined"
                        value={this.state.flatDetails.kitchen}
                        className={classes.textField}

                        InputProps={{
                            readOnly: true
                        }} />
                    <TextField label="Location"
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.flatDetails.location}

                        InputProps={{
                            readOnly: true
                        }} />

                </div>
                <InputLabel
                    htmlFor="select-owner"
                    ref={ref => (this.InputLabelRef = ref)}
                >Select Owner</InputLabel>
                <Select value={this.state.owner}
                    onChange={this.onChangeHandler('owner')}
                    input={
                        <OutlinedInput
                            id='select-owner'
                        />
                    }

                    style={{ margin: '20px' }}
                >
                    <MenuItem value="Add New">Add New</MenuItem>
                    <MenuItem value="Update Existing">Update Existing</MenuItem>
                </Select>
                <Form/>

            </div>

        )
    }
}

export default Home