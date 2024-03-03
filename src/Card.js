import App from './App';

function Card() {
return(
  <div class="row">
    <div class="col-sm-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <h5 class="card-title">Card 01</h5>
          <p class="card-text">These cards and navigation bar is made for AWS Assignment 2.</p>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card text-white bg-danger">
        <div class="card-body">
          <h5 class="card-title">Card 02</h5>
          <p class="card-text">The code was completed on March 3, 2023 for all components.</p>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card text-white bg-success">
        <div class="card-body">
          <h5 class="card-title">Card 03</h5>
          <p class="card-text">I can't wait for spring break to get all this over with.</p>
        </div>
      </div>
    </div>
  </div>
)
}
export default Card;