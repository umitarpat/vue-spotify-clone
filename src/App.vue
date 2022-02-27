<template>
  <div class="bg-dark h-screen">
    <div class="flex" style="height: 88vh;">
      <!-- SideNav -->
      <div class="w-56 bg-black h-full flex-none">
        <div class="p-6">
          <img src="spotifylogo.png" class="h-10">
        </div>

        <div class="mx-2 mb-5">
          <button v-for="page in pages" v-bind:key="page" v-on:click="setId = page.id" :class="`w-full focus:outline-none text-sm font-semibold rounded px-3 py-2 items-center text-left ${setId === page.id ? 'bg-light text-white' : 'text-lightest'}`">
            <font-awesome-icon :icon="`${page.icon}`" class="mr-3"/> <span>{{page.name}}</span>
          </button>
        </div>

        <div class="mx-5">
          <h1 class="mb-3 text-xs text-lightest tracking-widest uppercase">Çalma Listeleri</h1>
          <button class="flex text-left items-center justify-start text-sm font-semibold text-white opacity-75 hover:opacity-100 mb-2 py-2">
            <font-awesome-icon :icon="['fa', 'plus']" class="w-4 h-4 mr-2"/> <span>Çalma Listesi Oluştur</span>
          </button>
          <button class="flex text-left items-center justify-start text-sm font-semibold text-white opacity-75 hover:opacity-100 py-2">
            <font-awesome-icon :icon="['fa', 'heart']" class="w-4 h-4 mr-2"/> <span>Beğenilen Şarkılar</span>
          </button>
          <div class="h-px w-full bg-light my-3"></div>
        </div>

        <div class="ml-5">
          <div class="w-full h-44 overflow-y-scroll mb-3">
            <p v-for="song in likedSongs" v-bind:key="song" class="text-lightest hover:text-white text-sm truncate py-1">{{song.name}}</p>
          </div>
          <button class="flex items-center justify-start text-lightest hover:text-white">
            <font-awesome-icon icon="chevron-down" class="mr-2 rounded-full border border-lightest text-xs p-1 text-center items-center" /> <span class="text-sm font-semibold">Uygulamayı Yükle</span>
          </button>
        </div>
      </div>
      <!-- SideNav -->
      <!-- MainContent -->
      <div class="w-full h-full relative overflow-y-scroll">
        <!--Header -->
        <div class="w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-dark z-50">
          <div class="flex items-center">
            <button class="rounded-full bg-black w-8 h-8 text-white text-2xl mr-3">
              <font-awesome-icon icon="chevron-left"/>
            </button>
            <button class="rounded-full bg-black w-8 h-8 text-white text-2xl mr-3">
              <font-awesome-icon icon="chevron-right"/>
            </button>
          </div>
          <div class="relative">
            <button @click="`${showDropdown === false ? showDropdown = true : showDropdown = false}`" class="focus:outline-none bg-light rounded-full py-1 px-2 flex items-center">
              <img src="myAvatar.jpg" class="rounded-full h-6 w-6 mr-2">
              <span class="text-white text-xs font-semibold mr-3">Ümit Arpat</span>
              <span v-if="showDropdown === false"><font-awesome-icon icon="caret-down" class="text-white text-xs"/></span>
              <span v-if="showDropdown === true"><font-awesome-icon icon="caret-up" class="text-white text-xs"/></span>
            </button>
            <div v-if="showDropdown === true" class="absolute bg-light w-full rounded mt-1">
              <button @click="showDropdown = false" class="focus:outline-none w-full py-2 text-sm text-lightest hover text-white border-b border-white opacity-60 hover:opacity-100">Hesabım</button>
              <button @click="showDropdown = false" class="focus:outline-none w-full py-2 text-sm text-lightest hover text-white border-b border-light opacity-60 hover:opacity-100">Çıkış Yap</button>
            </div>
          </div>
        </div>
        <!--Header -->
        <!--Cards -->
        <div class="px-6 py-3">
          <div class="flex items-center justify-between">
            <h1 class="pl-2 text-2xl font-semibold text-white trackinkg-wider hover:underline">Yakınlarda Çalınanlar</h1>
            <h2 class="pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3">Hepsini Gör</h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="item in recents" v-bind:key="item" class="p-2 w-48 relative">
              <div class="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100">
                <div class="bg-green rounded-full w-10 h-10 flex items-center justify-center">
                  <font-awesome-icon icon="play" class="text-white text-1xl"/>
                </div>
              </div>
              <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                <img :src="`${item.src}`" class="h-auto w-full shadow mb-2">
                <span class="w-full block text-sm font-semibold text-white tracking wide">{{item.title}}</span>
                <span class="w-full block text-xs text-lightest tracking wide pb-5">{{item.artist}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--Cards -->
        <!--Cards -->
        <div class="px-6 py-3">
          <div class="pl-2">
            <h1 class="text-2xl font-semibold text-white trackinkg-wider hover:underline">umitarpat İçin Derlendi</h1>
            <h2 class="text-xs text-lightest">Sevdiğin her şeyden biraz dinle.</h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="item in makeForyou" v-bind:key="item" class="p-2 w-48 relative">
              <div class="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100">
                <div class="bg-green rounded-full w-10 h-10 flex items-center justify-center">
                  <font-awesome-icon icon="play" class="text-white text-1xl"/>
                </div>
              </div>
              <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                <img :src="`${item.src}`" class="h-auto w-full shadow mb-2">
                <span class="w-full block text-sm font-semibold text-white tracking wide">{{item.title}}</span>
                <span class="w-full block text-xs text-lightest tracking wide pb-5">{{item.artist}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--Cards -->
        <!--Cards -->
        <div class="px-6 py-3">
          <div class="pl-2">
            <h1 class="text-2xl font-semibold text-white trackinkg-wider hover:underline">Tavsiye Edilen İstasyonlar</h1>
            <h2 class="text-xs text-lightest">Favori şarkı ve sanatçılarına dayanan kesintisiz müzik.</h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="item in stations" v-bind:key="item" class="p-2 w-48 relative">
              <div class="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100">
                <div class="bg-green rounded-full w-10 h-10 flex items-center justify-center">
                  <font-awesome-icon icon="play" class="text-white text-1xl"/>
                </div>
              </div>
              <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                <img :src="`${item.src}`" class="h-auto w-full shadow mb-2">
                <span class="w-full block text-sm font-semibold text-white tracking wide">{{item.title}}</span>
                <span class="w-full block text-xs text-lightest tracking wide pb-5">{{item.artist}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--Cards -->
      </div>
      <!-- MainContent -->
    </div>

    <!-- PlayBar -->
    <div class="w-full flex items-center justify-between px-3 bg-light border-t border-dark" style="height: 12vh;">
      <div class="flex items-center w-1/4">
        <div>
          <h1 class="mb-1 text-sm text-white">Ne Sevmek Ne Sevilmek-Fenerbahçe</h1>
          <h2 class="text-xs text-lightest tarcking-wider">Fenerin Çocukları</h2>
        </div>
        <font-awesome-icon icon="heart" class="text-base text-green mx-4"/>
      </div>
      <div class="flex flex-col justify-center w-2/4 items-center">
        <div class="flex items-center">
          <button class="text-lightest hover:text-white mx-4">
            <font-awesome-icon icon="shuffle" class="text-base text-lightest text-1xl hover:text-white"/>
          </button>
          <button class="text-lightest hover:text-white">
            <font-awesome-icon icon="backward-step" class="text-base text-lightest text-1xl hover:text-white"/>
          </button>
          <button @click="`${pause === false ? pause = true : pause = false}`" class="text-lightest hover:text-white mx-4">
            <span v-if="pause === false"><font-awesome-icon icon="play-circle" class="text-base text-white text-2xl hover:text-white"/></span>
            <span v-if="pause === true"><font-awesome-icon icon="pause-circle" class="text-base text-white text-2xl hover:text-white"/></span>
          </button>
          <button class="text-lightest hover:text-white">
            <font-awesome-icon icon="forward-step" class="text-base text-lightest text-1xl hover:text-white"/>
          </button>
          <button class="text-lightest hover:text-white mx-4">
            <font-awesome-icon icon="repeat" class="text-base text-lightest text-1xl hover:text-white"/>
          </button>
        </div>
        <div class="w-3/4 flex items-center justify-center mt-1">
          <p class="text-xs text-lightest mr-1">0:45</p>
          <div class="w-full h-1 bg-lightest rounded-full flex items-center">
            <div class="h-1 rounded-full bg-green" style="width:18%;"></div>
            <div class="h-3 w-3 bg-white rounded-full shadow"></div>
          </div>
          <p class="text-xs text-lightest ml-1">4:12</p>
        </div>
      </div>
      <div class="flex items-center w-1/4 justify-end">
        <font-awesome-icon icon="list" class="text-base text-lightest hover:text-white"/>
        <font-awesome-icon icon="desktop-alt" class="text-base text-lightest mx-3 hover:text-white"/>
        <font-awesome-icon icon="volume-up" class="text-base text-lightest hover:text-white"/>
        <div class="w-20 ml-1 bg-lightest rounded-full h-1"></div>
      </div>
    </div>
    <!-- PlayBar -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
      return {
        pages: [
          {id: 'home', name: 'Ana sayfa', icon: 'home'},
          {id: 'search', name: 'Ara', icon: 'search'},
          {id: 'library', name: 'Kitaplığın', icon: 'book'}
        ],
        setId :'home',
        likedSongs: [
          {name: 'Ne Sevmek Ne Sevilmek-Fenerbahçe'},
          {name: 'Sea Shanty Medley'},
          {name: 'Love Me Again'},
          {name: 'UP'},
          {name: 'Kerkük Zindanı'},
          {name: 'Yerli Plaka'},
          {name: 'Yağmurlar'},
          {name: 'Ötede Dur'},
          {name: 'Sakatat'},
          {name: 'BASKIN (feat Ceza & Gazapizm)'},
          {name: 'Bul Beni'},
          {name: 'Küllenen Aşk'},
        ],
        showDropdown: false,
        pause: false,
        recents: [
          {src: 'cover1.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover2.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover3.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover1.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover2.jpg', title: 'Daily Mix', artist: 'Spotify'}
        ],
        makeForyou: [
          {src: 'cover4.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover5.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover6.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover4.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover5.jpg', title: 'Daily Mix', artist: 'Spotify'}
        ],
        stations: [
          {src: 'cover2.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover7.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover8.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover9.jpg', title: 'Daily Mix', artist: 'Spotify'},
          {src: 'cover3.jpg', title: 'Daily Mix', artist: 'Spotify'}
        ],
      }
  },
  created() {
    const html = document.documentElement
    html.setAttribute('lang', 'tr')
  }
}
</script>