---
layout: layout.njk
title: Quote
---
<link rel="stylesheet" href="/quotestyles.css" />

<section class="quote-hero">
  <div class="quote-hero-container">
    <h1>Get A <em>Pressure Washing Quote</em> &amp; Schedule Your Cleaning Project Today! </h1>
    <h2>Call <a href="tel:6155551234">615-555-1234</a> or<br>Fill Out Our Quote Form</h2>
  </div>

  <form name="quote" method="POST" class="quote-form-wrapper" data-netlify="true">
    <div class="row">
      <input type="hidden" name="quote" value="contact"/>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email Address" required />
    </div>
    <div>
    <input type="tel" name="phone" placeholder="Phone Number" required />
    </div>
    <input type="text" name="address" placeholder="Address" />
    <textarea name="message" rows="5" placeholder="Tell Us About Your Project"></textarea>
<div>
       <label class="captcha-label">7 + 1 =</label> <input type="text" name="captcha" required class="captcha-input" />
</div>
    <div class="form-row-submit">
      <button type="submit">Submit</button>
    </div>
  </form>
<div class="quote-hero-container">
<h2><a href="tel:6155551234">Call Now 615-555-1234</a></h2>
</div>

</section>
