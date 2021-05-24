import React from "react";

export default function Projects() {
  return (
    <div id="projects" className="container">
      <h3>Projects</h3>
      <br />
      <div className="project">
        <h4 className="project-title">Pathfinding Visualizer</h4>
        <div className="project-body">
          <img className="projectImg" src="smallPathfindingV2.JPG"></img>
          <div className="project-text">
            <p>
              This project is a web application created in React that allows a
              user to interact with a grid to visualize a number of different
              pathfinding algorithms. The user is able to draw walls, create
              different types of mazes, and select an algorithm to search the
              grid from start to finish.
            </p>
            <a href="https://pathfinding-visualization-v1.herokuapp.com/">
              View Pathfinding Visualizer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
