import App from './App';

function Card() {
return(
  <div class="row">
    <div class="col-sm-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <h5 class="card-title">Card 01</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card text-white bg-danger">
        <div class="card-body">
          <h5 class="card-title">Card 02</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card text-white bg-success">
        <div class="card-body">
          <h5 class="card-title">Card 03</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
  </div>
)
}
export default Card;