import React from 'react';
import './about-me.css';

const AboutMe = () => (
  <div className="about-me">
    <h3>
      About <span>Me</span>
    </h3>

    <div className="flex-grid">
      <div className="about-descr">
        Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit,
        sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus
        dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
        condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.
      </div>
      <div className="about-meta">
        <ul>
          <li>
            <span>Age</span> 32
          </li>
          <li>
            <span>Residence</span> USA
          </li>
          <li>
            <span>Address</span> 88 Some Street, Some Town
          </li>
          <li>
            <span>e-mail</span> email@example.com
          </li>
          <li>
            <span>Phone</span> +0123 123 456 789
          </li>
        </ul>
      </div>
    </div>

    <div className="about-skills flex-grid">
      <div className="skill-item flex-50">
        <h4>Ecommerce</h4>
        <p>
          Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
          amet ultricies ex lectus scelerisque nibh. Ut non sodales.
        </p>
      </div>
      <div className="skill-item flex-50">
        <h4>Ecommerce</h4>
        <p>
          Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
          amet ultricies ex lectus scelerisque nibh. Ut non sodales.
        </p>
      </div>
      <div className="skill-item flex-50">
        <h4>Ecommerce</h4>
        <p>
          Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
          amet ultricies ex lectus scelerisque nibh. Ut non sodales.
        </p>
      </div>
      <div className="skill-item flex-50">
        <h4>Ecommerce</h4>
        <p>
          Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
          amet ultricies ex lectus scelerisque nibh. Ut non sodales.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
