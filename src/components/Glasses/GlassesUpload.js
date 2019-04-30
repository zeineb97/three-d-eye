import React, {Component} from 'react';
import {storage} from '../../config/fbConfig';

class GlassesUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const model = e.target.files[0];
      this.setState(() => ({model}));
    }
  }
  handleUpload = () => {
      const {model} = this.state;
      const uploadTask = storage.ref(`models/${model.name}`).put(model);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('models').child(model.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div style={style}>
      <progress value={this.state.progress} max="100"/>
      <br/>
 
        <input  type="file" onChange={this.handleChange}/>
        <br/>
        <button className="btn grey lighten-1"  onClick={this.handleUpload}>Upload</button>
        <br/>
       
       
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded models" height="300" width="400"/>
      </div>
    )
  }
}

export default GlassesUpload;