// Behavior
async function script(props) {
  if (!props.contract) return;

  const evalCondition = async () => {
    const account = getAccount();

    $(".nft-card").click((el) => {
      const nft = el.target.getAttribute("data-metadata");
      document.dispatchEvent(new CustomEvent("onNFTSelect", { nft: JSON.parse(nft) }));
      console.log(`Event dispatched with content ${nft}`);
    });

    const results = await fetch(
      `https://deep-index.moralis.io/api/v2/${account}/nft?chain=eth&format=decimal&limit=1`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "X-API-Key": process.env.MORALIS_API_KEY,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const data = await results.json();
    const list = data.result;

    $(".nft-card").css("display", "block");

    list.forEach((item, index) => {
      const meta = JSON.parse(item.metadata);
      $(`#nft-container-${index + 1}`).attr(
        "data-metadata",
        JSON.stringify(item)
      );
      $(`#nft-image-${index + 1}`).attr("src", meta.image);
      $(`#nft-title-${index + 1}`).text(`${item.symbol} #${item.token_id}`);
      $(`#nft-description-${index + 1}`).text(item.name);
    });
  };

  const getAccount = () => {
    const provider = window.walletProvider;
    if (!provider) return;

    if (provider.accounts && provider.accounts.length > 0)
      return provider.accounts[0];

    return provider.selectedAddress;
  };

  const hide = () => {
    $(".nft-card").css("display", "none");
  };

  document.addEventListener("Connected", () => evalCondition());
  document.addEventListener("accountsChanged", () => evalCondition());
  document.addEventListener("chainChanged", () => evalCondition());
  document.addEventListener("networkChanged", () => evalCondition());
  document.addEventListener("onDisconnect", () => hide());

  evalCondition();
}

export default script;
