<template>
    <header class="header">
        <div class="header-content responsive-wrapper">
            <div class="header-logo">
                <a href="#" style="text-decoration:none">
                    <div>
                        <img src="https://assets.codepen.io/285131/untitled-ui-icon.svg" />
                    </div>
                    <h2>Snooker</h2>
                </a>
            </div>
            <div class="header-navigation">
                <nav class="header-navigation-links">
                    <a href="/home"> Home </a>
                    <a href="#"> Tracks </a>
                    <a href="#"> Recents </a>
                    <a href="#"> Playlist </a>
                    <a href="#"> Atists </a>
                    <a href="#"> Albums </a>
                </nav>
                <div class="search">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                        <i class="ph-magnifying-glass-bold"></i>
                    </button>
                </div>
                <div class="header-navigation-actions">
                    <a href="#" class="avatar">
                        <img src="https://assets.codepen.io/285131/hat-man.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
@import '../css/style.css'
</style>