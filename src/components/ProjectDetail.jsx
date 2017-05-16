import React, { Component } from 'react';
import PropTypes from 'prop-types';

import projects from '../assets/projects.js'


export default class ProjectDetail extends Component {
    render(){
        const { name, description, thumbnail } = this.props
        return(
            <div>
                <img src={thumbnail} alt={`thumbnail of ${name} project`} />
                <div className="projectName"> {name}  </div>
                <p className="description"> {description} </p>

                <p> {url} </p>


            </div>

        )
    }
}

ProjectDetail.propTypes = {

    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    keywords: PropTypes.arrayOf(PropTypes.string),
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    url: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
    entity: PropTypes.string, // Company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'"
    type: PropTypes.string, //" e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'"
    thumbnail: PropTypes.string,
    team: PropTypes.arrayOf(PropTypes.string)
}