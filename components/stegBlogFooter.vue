<template>
  <div class="footer-wrapper">
    <p>Copyright &copy; 2020 Steg All Rights Reserved.</p>
  </div>
</template>


<style>
.footer-wrapper {
  height: 200px;
  width: 100%;
  background-color: #404040;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-wrapper p {
  color: #f7f7f7;
  font-size: 1rem;
}
/*----------500px以下------------*/
@media screen and (max-width: 500px) {
  .footer-wrapper {
    height: 100px;
  }
  .footer-wrapper p {
    color: #f7f7f7;
    font-size: 0.8rem;
  }
}
</style>