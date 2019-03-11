import React, { Component } from 'react'
import classes from './Home.css'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Form from '../../Form/Form';
import InputLabel from '@material-ui/core/InputLabel'
import Owners from '../../Owners/Owners';
class Home extends Component {

    state = {
        flats: [
            { no: 1, flatDetails: { rooms: 3, latBath: 2, kitchen: 2, location: 'vacany' }, flatOwner: [{ name: 'Abhinav', email: 'abhi@gmail.com', address: 'here there', contact: '1234567' }, { name: 'Ayushman', email: 'ayush@gmail.com', address: 'here there', contact: '987654' }, { name: 'Ayushman', email: 'ayush@gmail.com', address: 'here there', contact: '987654' }, { name: 'Ayushman', email: 'ayush@gmail.com', address: 'here there', contact: '987654' }] },
            { no: 2, flatDetails: { rooms: 3, latBath: 2, kitchen: 2, location: 'vacany' }, flatOwner: [{ name: 'Abhishek', email: 'abhishek@gmail.com', address: 'here there', contact: '1234567' }] },
            { no: 4, flatDetails: { rooms: 3, latBath: 2, kitchen: 2, location: 'vacany' }, flatOwner: [{ name: 'Nikhil', email: 'nikhil@gmail.com', address: 'here there', contact: '987654' }] },
        ],
        currentFlatOwner: [],
        owner: 'Show',
        no: 0,
        flatDetails: { rooms: 0, latBath: 0, kitchen: 0, location: 'some location' },
    }
    flatChangeHandler = name => event => {
        this.setState({
            [name]: event.target.value,
        })
        this.changeFlatDetails(event.target.value);
    }

    ownerChangeHandler = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }


    changeFlatDetails = (m) => {
        let flats = [...this.state.flats]
        let currentFlatOwner = [...this.state.currentFlatOwner]
        for (let x in flats) {
            if (flats[x].no == m) {
                currentFlatOwner = [...flats[x].flatOwner]
                this.setState({
                    flatDetails: { ...flats[x].flatDetails },
                    currentFlatOwner: currentFlatOwner,
                    owner: 'Show',
                })
                return;
            }
        }
        this.setState({
            flatDetails: {
                rooms: 0, latBath: 0, kitchen: 0, location: 'some location'
            },
            currentFlatOwner: []
        })
    }
    addNewOwner = (owner) => {
        let flatOwner = [...this.state.currentFlatOwner]
        flatOwner.push(owner);
        this.setState({
            currentFlatOwner: flatOwner,
            owner: 'Show'
        })
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
                    onChange={this.flatChangeHandler("no")}
                    value={this.state.no}
                    style={{
                        width: '90px', height: '50px', textAlign: 'center', margin: '20px', display: 'inline-block'
                    }} />

                <fieldset className={classes.fieldset}>
                    <legend style={{ fontSize:'30px', color: 'blueviolet', marginRight: '20%' }}>Flat Details</legend>
                    <div className={classes.FlatDetails}><TextField label="No. of Room"
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
                            }} /></div>



                </fieldset>
                <div style={{ display: 'block' }}>
                    <InputLabel
                        htmlFor="select"
                    >Select Owner</InputLabel>
                    <Select value={this.state.owner}
                        onChange={this.ownerChangeHandler('owner')}
                        inputProps={{
                            id: "select",
                            name: 'select'
                        }}
                        style={{ margin: '20px' }}
                    >   <MenuItem value='Show'>Show</MenuItem>
                        <MenuItem value="Add New">Add New</MenuItem>
                    </Select>
                </div>


                {
                    this.state.owner === 'Add New' ?
                        <Form click={this.addNewOwner} />
                        : null
                }
                <Owners owners={this.state.currentFlatOwner} read={this.state.readOnly} />


            </div>

        )
    }
}

export default Home