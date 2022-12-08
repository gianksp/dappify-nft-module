const block = {
  id: `section-${process.env.MODULE_ID}`,
  category: "NFT",
  label: `
    <?xml version="1.0" encoding="utf-8"?>
    <svg viewBox="0 0 266 150" width="266px" height="150px" xmlns="http://www.w3.org/2000/svg">
      <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 0.078125 0 L 265.921875 0 L 265.921875 150 L 0.078125 150 Z M 0.078125 0 "/>
        <path style="stroke: none; fill-rule: nonzero; fill: rgb(226, 232, 240); fill-opacity: 1;" d="M 95.416 22.48 L 177.392 22.48 C 178.409 22.48 179.234 23.453 179.234 24.652 L 179.234 118.156 C 179.234 119.355 178.409 120.332 177.392 120.332 L 95.416 120.332 C 94.4 120.332 93.574 119.355 93.574 118.156 L 93.574 24.652 C 93.574 23.453 94.4 22.48 95.416 22.48 Z M 95.416 22.48"/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(29.019608%,33.333333%,40.784314%);fill-opacity:1;" d="M 105.909 87.444 L 141.89 87.444 C 142.991 87.444 143.89 88.342 143.89 89.444 C 143.89 90.549 142.991 91.444 141.89 91.444 L 105.909 91.444 C 104.808 91.444 103.913 90.549 103.913 89.444 C 103.913 88.342 104.808 87.444 105.909 87.444 Z M 105.909 87.444"/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(29.019608%,33.333333%,40.784314%);fill-opacity:1;" d="M 139.488281 140.613281 L 144.476562 135.121094 "/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(88.627451%,90.980392%,94.117647%);fill-opacity:1;" d="M 103.710938 130.878906 L 93.699219 113.34375 "/>
        <path style="stroke: none; fill-rule: nonzero; fill-opacity: 1; fill: rgb(164, 174, 190);" d="M 107.307 96.476 L 168.843 96.476 C 170.726 96.476 172.264 97.341 172.264 98.402 C 172.264 99.467 170.726 100.329 168.843 100.329 L 107.307 100.329 C 105.424 100.329 103.893 99.467 103.893 98.402 C 103.893 97.341 105.424 96.476 107.307 96.476 Z M 107.307 96.476"/>
        <path style="stroke: none; fill-rule: nonzero; fill-opacity: 1; fill: rgb(164, 174, 190);" d="M 106.396 104.969 L 149.655 104.969 C 150.979 104.969 152.06 105.797 152.06 106.812 C 152.06 107.831 150.979 108.656 149.655 108.656 L 106.396 108.656 C 105.072 108.656 103.996 107.831 103.996 106.812 C 103.996 105.797 105.072 104.969 106.396 104.969 Z M 106.396 104.969"/>
        <g transform="matrix(0.005566, 0, 0, 0.005566, 160.260635, 103.890663)" style="">
          <polygon fill="#8A92B2" points="959.8,80.7 420.1,976.3 959.8,731 &#9;"/>
          <polygon fill="#62688F" points="959.8,731 420.1,976.3 959.8,1295.4 &#9;"/>
          <polygon fill="#62688F" points="1499.6,976.3 959.8,80.7 959.8,731 &#9;"/>
          <polygon fill="#454A75" points="959.8,1295.4 1499.6,976.3 959.8,731 &#9;"/>
          <polygon fill="#8A92B2" points="420.1,1078.7 959.8,1839.3 959.8,1397.6 &#9;"/>
          <polygon fill="#62688F" points="959.8,1397.6 959.8,1839.3 1499.9,1078.7 &#9;"/>
        </g>
        <g transform="matrix(0.365863, 0, 0, 0.365863, 99.320847, 6.69524)" paint-order="fill markers stroke" style="">
          <path fill="#d0d0d0" d="M13.591 66.639H193.71v139.794H13.591z"/>
          <path d="m118.507 133.514-34.249 34.249-15.968-15.968-41.938 41.937H178.726z" opacity=".675" fill="#fff"/>
          <circle cx="58.217" cy="108.555" r="11.773" opacity=".675" fill="#fff"/>
          <path fill="none" d="M26.111 77.634h152.614v116.099H26.111z"/>
        </g>
      </g>
    </svg>
  `,
  content: `
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card nft-card" id="nft-container-1">
            <img id="nft-image-1" src="https://lstr.by/wp-content/uploads/woocommerce-placeholder-400x400.png" />
            <div id="nft-title-1">Title</div>
            <div id="nft-description-1">Description</div>
          </div>
        </div>
      </div>
    </div>
    <style>
      .nft-card {
        padding: 20px;
        height: auto;
        background: black;
      }
      .nft-card img {
        margin: 0 auto;
      }
    </style>`,
};

export default block;
