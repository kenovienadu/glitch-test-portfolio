<template>
  <div>
    <div class="grid-background">
      <div></div>
      <div></div>
    </div>

    <div class="flex-wrapper">
      <div class="name flex-center">
        <span>{{ data.name.split(" ")[0] }}</span>
        <span>{{ data.name.split(" ")[1] }}</span>
      </div>

      <div class="image-wrapper">
        <img src="../assets/hero.png" />
      </div>

      <div class="bottom-links">
        <span>home</span>
        <span>about</span>

        <div class="avatar-image">
          <img src="../assets/avatar.jpg" />
        </div>

        <span>gallery</span>
        <span>contact</span>
      </div>
    </div>

    <div class="icons-wrapper">
      <div class="inner">
        <a :href="instagramLink" target="_blank"
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></a>
        <a :href="twitterLink" target="_blank"
          ><font-awesome-icon :icon="['fab', 'twitter']"
        /></a>
        <a :href="snapchatLink" target="_blank"
          ><font-awesome-icon :icon="['fab', 'snapchat']"
        /></a>
        <a :href="emailLink"> <font-awesome-icon icon="envelope" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  props: ["data"],
  data() {
    return {
      snapchatLink: "",
      instagramLink: "",
      twitterLink: "",
      emailLink: "",
    };
  },
  mounted() {
    this.snapchatLink = `https://www.snapchat.com/${this.data.social_media.snapchat}`;
    this.instagramLink = `https://www.instagram.com/${this.data.social_media.instagram}/`;
    this.twitterLink = `https://twitter.com/${this.data.social_media.twitter}`;
    this.emailLink = `mailto:${this.data.social_media.email}`;
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.debug {
  border: 1px solid white;
}

.grid-background {
  display: grid;
  height: 100vh;
  grid-template-columns: 50% 50%;

  & > div:first-child {
    background: #ac003c;
  }

  & > div:last-child {
    background: #bc1051;
  }
}

.flex-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2em 1em;

  .image-wrapper {
    width: min(500px, 80vw);

    & > img {
      box-shadow: -5px 0 20px 0 #0a0a0a4a;
      object-fit: contain;
      width: 100%;
      border-radius: 20px;
    }
  }
}

.name.flex-center {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & > span {
    display: inline-block;
    width: 280px;
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-weight: 700;
  }
}

.bottom-links {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: min(1000px, 95vw);

  & > span {
    text-transform: uppercase;
    font-size: 1rem;
    width: 160px;
    text-align: center;
    letter-spacing: 0.5em;
  }

  .avatar-image img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: black;
    overflow: hidden;
    object-fit: cover;
  }
}

.icons-wrapper {
  position: fixed;
  top: 0;
  right: 1em;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  .inner {
    background: #ac003c;
    padding: 0.5em;
    height: 250px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;
  }

  a {
    display: block;
    color: white;
    font-size: 1.5em;
  }
}

@media screen and (max-width: 600px) {
  .name.flex-center {
    padding-top: 50px;
    & > span {
      font-size: 1.3em;
      width: 160px;
    }
  }

  .icons-wrapper {
    padding: 1em 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: auto;

    .inner {
      flex-direction: row;
      height: auto;
      width: 240px;
      border-radius: 5px;

      a {
        font-size: 1em;
      }
    }
  }

  .bottom-links {
    display: inline-grid;
    grid-template-columns: auto 80px auto;
    grid-template-rows: 80px 40px;
    padding: 0 2em;

    & > span {
      font-size: 0.8rem;
      width: auto;
      text-align: left;
      letter-spacing: initial;
      font-weight: 700;

      &:nth-child(1) {
        grid-column: 1/2;
        grid-row: 1;
      }

      &:nth-child(2) {
        grid-column: 3/4;
        grid-row: 1;
      }

      &:nth-child(3) {
        grid-column: 1/2;
        grid-row: 2;
      }

      &:nth-child(4) {
        grid-column: 3/4;
        grid-row: 2;
      }
    }

    .avatar-image {
      // display: none;
      grid-row: 1;
      grid-column: 2/3;
    }
  }
}
</style>>
