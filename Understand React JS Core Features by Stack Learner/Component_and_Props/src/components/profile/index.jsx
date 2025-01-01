import React from "react";
import { Component } from "react";
import Bio from "./bio";
import Skills from "./skills";
import Social from "./socialLink";

class Profile extends Component {
    render () {
        return (
            <div>
                <Bio />
                <Skills />
                <Social />
            </div>
        )
    }
}

export default Profile;