<template>
  <footer>
    <section id="links-container">
      Siga a gente:
      <div class="link">
        <img class="img-link" src="../../assets/social-media-logo/linkedin-logo.png"/>
        <span>VestGame</span>
      </div>

      <div class="link">
        <img class="img-link" src="../../assets/social-media-logo/insta-logo.png"/>
        <span>@vestGame</span>
      </div>

      <div class="link">
        <img class="img-link" src="../../assets/social-media-logo/twitter-logo.png"/>
        <span>@vestGame</span>
      </div>

      <div class="link">
        <img class="img-link" src="../../assets/social-media-logo/youtube-logo.png"/>
        <span>/vestGameYT</span>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'FooterView',
}
</script>

<style scoped>

  footer {
    font-size: 20px;
    font-weight: bold;
    background-color: var(--cyan);
    padding: 7vh 10vw;
  }

  #links-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .img-link {
    width: 30px;
    height: 30px;
  }

  span {
    color: var(--white);
  }

</style>
