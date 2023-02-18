import React from 'react'
import {AppBar, Toolbar} from "@mui/material"
import { image_url } from '../data'
const Header = () => {
  return (
    <>
        <header>
            <AppBar  >
                <Toolbar >
                    <h2>Tarika Technologies</h2>
                </Toolbar>
            </AppBar>
        </header>
        
    </>
  )
}

export default Header;