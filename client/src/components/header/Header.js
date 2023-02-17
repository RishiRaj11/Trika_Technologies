import React from 'react'
import {AppBar, Toolbar} from "@mui/material"
import { image_url } from '../data'
const Header = () => {
  return (
    <>
        <header>
            <AppBar  >
                <Toolbar >
                    <img src={image_url} width="10%" />
                </Toolbar>
            </AppBar>
        </header>
        
    </>
  )
}

export default Header;