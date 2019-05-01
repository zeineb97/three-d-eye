import * as THREE from "three";
import React from "react";
import React3 from "react-three-renderer";
import ObjectModel from 'react-three-renderer-objects';
import glassesModel from "../assets/glassesForBoddicker.obj";

class DemoScene extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      scene: {}
    };
  }
componentDidMount() {
    const { scene } = this.refs;
    this.setState({ scene });
  }
render() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    return (
      <React3
        mainCamera="camera"
        width={width/4}
        height={height/4}
        alpha={true}
      >
        <scene ref="scene">
          <perspectiveCamera
            key={`perspectiveCamera`}
            name="camera"
            fov={80}
            aspect={width / height}
            near={5}
            far={500}
            position={new THREE.Vector3(100, 10, 25)}
            lookAt={new THREE.Vector3(10, 10, 10)}
          />
          <group name="carGroup">
            <ObjectModel
              name="boat"
              model={glassesModel}
              scene={this.state.scene}
              group="carGroup"
            />
          </group>
        </scene>
      </React3>
    );
  }
}
export default DemoScene;