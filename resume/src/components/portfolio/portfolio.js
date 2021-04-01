import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="w-full bg-gray-100 pt-8">     
          <h3 class="text-black text-5xl font-medium text-center mb-8">A Few Of My Latest Creations</h3> 
        </div>
          <div class="grid grid-cols-2 spec-marg bg-gray-100">
              <div >
                <div class="p-20  bg-gray-100 w-full ">
                  <div class="bg-gray rounded-lg shadow-lg">
                    <img src="images/portfolio/letsplay.png" alt="" class="rounded-t-lg"></img>
                    <div class="p-6">
                      <p class="text-gray-900 mb-2">Check out website <a href="https://www.letsplay.digital/" class="text-gray-900 underline">here</a></p>
                      <a href="https://github.com/dagas19/Lets-play" class="text-gray-900 hover:text-purple-500 underline text-sm">Source code 👉</a>
                    </div>
                  </div>
                </div>
              </div>  
              <div >
                <div class="p-20  bg-gray-100 w-full ">
                  <div class="bg-gray rounded-lg shadow-lg">
                    <img src="images/portfolio/jetnow.png" alt="" class="rounded-t-lg"></img>
                    <div class="p-6">
                      <p class="text-gray-900 mb-2">Check out website <a href="https://jet-now.herokuapp.com/" class="text-gray-900 underline">here</a></p>
                      <a href="https://github.com/dagas19/Jet-Now" class="text-gray-900 hover:text-purple-500 underline text-sm">Source code 👉</a>
                    </div>
                  </div>
                </div>
              </div>
             </div> 
      </React.Fragment>  
    )
  }
}