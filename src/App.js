import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Popeyes</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Menu</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Rewards</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Locations</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Popeyes</h1>
          <p className="lead">Bold Louisiana flavor that keeps you coming back!</p>
          <a href="#" className="btn btn-danger btn-lg mt-3">Order Now</a>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center mb-4">Featured Items</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card">
              <img 
                src="https://www.pexels.com/photo/cheeseburger-with-meat-20722058/" 
                className="card-img-top" 
                alt="Spicy crispy fried chicken sandwich with lettuce and tomato on a sesame seed bun, served with golden French fries on a wooden board. The meal is presented in a casual dining setting, evoking a warm and inviting atmosphere. No visible text in the image. The tone is appetizing and cheerful." 
              />
              <div className="card-body">
                <h5 className="card-title">Chicken Sandwich</h5>
                <p className="card-text">Crispy, juicy, and perfectly seasoned. A fan favorite!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img 
                src="https://www.pexels.com/photo/gourmet-fried-chicken-with-fries-and-sauce-31097759/" 
                className="card-img-top" 
                alt="Three golden brown chicken tenders arranged on a white plate with a small cup of dipping sauce. The background is plain and neutral. The word Tenders appears in large bold letters at the center of the image. The tone is simple and inviting." 
              />
              <div className="card-body">
                <h5 className="card-title">Chicken Tenders</h5>
                <p className="card-text">Hand-battered, golden tenders with your choice of dipping sauce.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img 
                src="https://www.pexels.com/photo/close-up-photo-of-bread-1957017/" 
                className="card-img-top" 
                alt="Two fluffy golden biscuits stacked on a white plate with a soft, warm appearance. The background is plain and neutral. The word Biscuits appears in large bold letters at the center of the image. The tone is comforting and homey." 
              />
              <div className="card-body">
                <h5 className="card-title">Buttery Biscuits</h5>
                <p className="card-text">Soft, warm, and buttery biscuits to complete your meal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-warning text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Popeyes Mockup. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
