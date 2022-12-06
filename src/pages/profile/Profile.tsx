import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { AboutMe } from "../../components/aboutMe/AboutMe";
import FooterPerfil from "../../components/footer/footerPerfil/FooterPerfil";
import { ImageProfile } from "../../components/imageProfile/ImageProfile";
import { PersonalPosts } from "../../components/personalPosts/PersonalPosts";
import "./Profile.css";
import { IconPhoto } from "../../components/iconPhoto/IconPhoto";
import ImageAvatars from "../../components/stories/Stories";

function Profile() {
  return (
    <Grid container spacing={0} direction-column>
      {/**
       * @descricao Container das informações do usuário
       */}
      <Grid container item>
        <ImageProfile />
      </Grid>

      {/**
       * @descricao Container das publicações do usuário
       */}
      <Grid container item>

      </Grid>
    </Grid>
  );
}

export { Profile };
