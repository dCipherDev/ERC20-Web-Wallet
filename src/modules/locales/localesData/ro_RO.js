export default {
  global: {
    all: 'Toate',/**'All', */
    market: 'Piata',/**'Market', */
    options: 'Optiuni',/**'Options',*/
    amount: "{amount,number}",
    no_data:"Fara date",/**"No data",*/
    comingsoon:"In curand",/**"Coming soon", */
    wallet:"Portofel",/**"Wallet", */
    yes:"Da",/**"Yes", */
    no:"Nu",/**"No", */
    price:'Pret',/**'Price',*/
    amount_label:'Suma',/**'Amount',*/
    total:'Total',
    time:'Timp',/**'Time',*/
    custom:'Customizeaza',/**'Customize', */
    gas:'Gas',
  },
  userguide:{
    title:'Manual de utilizare',/**'User Guide' */
    visible:false,
  },
  testtips:{
    title:'Is In The Test',
    description:`
      <div className="fs12">
          1. Trading mode is very different from traditional exchanges
      </div>
      <div className="fs12">
          2. Current version you see is for your reference only
      </div>
      <div className="fs12">
          3. Final version will work very well with no bugs
      </div>
    `,
    tradetips_title:"Trading Tips ( Beta3 Only )",
    tradetips_description:`
      1. You trading address must have 1000+LRC ( Beta3 Only ).
      <br />
      2. The amount of every order shall not be less than 100USD ( Beta3 Only ).
    `,
    trades_faq:'',
  },
  version:{
    label:'V1',
    title:'V1',
    description:'Portofelul dCipher este o implementare bazata pe un proiect Open Source ce permite utilizatorilor sa faca tranzactii in siguranta pe blockchain-ul Ethereum',/**'dCipher wallet is an open-sourced reference implementeation of a web-based non-custodial Ethereum wallet that enable users to trade ERC20 tokens using the dCipher Protocol.', */
    roadmap_label:'Mai multe informatii',/**'More Info' */
    roadmap_title:'Plan de dezvoltare al portofelului',/**'Wallet development roadmap' */
	feedback:'Pareri si opinii',/**'Feedback' */
    feedback_submit:'Raporteaza o problema',/**'Report an issue', */
    version:'Versiune curenta',/**'Current Version', */
    update_time:'Ultima actualizare',/**'Last Update' */
  },
  feedback:{
    email_to:"hello@dcipher",
    email_subject:"Pareri si Opinii Portofel dCipher",
    email_body:`
## Probleme: \n
Selecteaza categoria problemei: Deblocheaza Portofel | Genereaza Portofel | Seteaza Adresa pentru "Airdrop" | Trimitere/Primire | Tranzactionare | Istoricul datelor | Altele \n
Browser: Chrome | Safari | Internet Explorer | Altele (Te rog specifica)\n
Sistem de operare:\n
Adresa Ethereum: (daca este cazul)\n
Am gasit urmatoarele probleme:
\n
\n
## SUGESTII:\n
Mi-a venit ideea asta:
\n
\n
`,
  },
  navbar: {
    home: "Acasa",/**"Home",*/
    trade: "PIETE DE SCHIMB",/**"MARKETS",*/
    wallet: "PORTOFEL",/**"WALLET", */
    dex: "Exchange descentralizat",/**"DEX",*/
    settings: "Setari",/**"Settings",*/
    portfolio: "Portofoliu",/**"Portfolio",*/
    account: "Cont",/**"Account",*/
    subs: {
      copy: 'Copiaza',/**'Copy',*/
      copy_success: 'Copiat cu succes.',/**'Copied successfully.', */
      copy_failed: 'Copiere nereusita!',/**'Failed to copy!', */
      unlock: 'Deblocheaza un portofel',/**'Unlock A Wallet',*/
      generate: 'Genereaza un portofel nou',/**'Generate A Wallet', */
      export: "Exporta \"Keystore\"",/**"Export Keystore", */
      help: 'Ajutor',/**'Help', */
      tools: 'Unelte',/**'Tools', */
      qrcode: 'Cod QR',/**'QR Code', */
      receive: 'Primeste',/**'Receive', */
      send: 'Trimite',/**'Send', */
      trade: 'Tranzactioneaza',/**'Trade', */
      airdrop: 'Airdrop',
      quit: 'Iesire',/**'Quit', */
	  website: 'Website',
      address: 'Adresa',/**'Address', */
      feedback: 'Pareri si Opinii',/**'Feedback', */
    },
    refresh_page_tip_title:"De ce trebuie sa deblochezi portofelul de fiecare data cand deschizi pagina?",/**"Why do u have to unlock wallet again after refreshing/closing the page?",*/
    refresh_page_tip_description:"Pentru siguranta fondurilor tale, dCipher nu stocheaza informatii despre portofelul tau", /**"Under the consideration of asset safety, dCipher shall not keep any of your wallet information.",*/
  },
  order: {
    buy: 'Cumpara',/**'Buy',*/
    sell: 'Vinde',/**'Sell',*/
    receive: 'Primeste',/**'Receive',*/
    convert: "Converteste",/**"Convert",*/
    buying: "Cumperi",/**"You are buying",*/
    selling: "Vinzi",/**"You are selling",*/
    lrcfee: "Comision",/**"Fee",*/
    margin: "Margin Split",
    since: "Valabil de la",/**"Valid Since",*/
    till: "Valabil pana la", /**"Valid Until",*/
    raw: "Ordinul Brut",/**"Raw Order",*/
    sign: "Semneaza",/**"Sign",*/
    signed: "Ordin Semnat",/**"Signed Order",*/
    place_tip: "Order submission is free and does not cost Ether",
    placing_order: "Placing order",
    place_success: "Order placed successfully.",
    place_success_tip: 'Good job. Your order has been submitted for ring-matching.',
    place_warn: "Your order can not be fully filled.",
    balance_not_enough: 'In order for your order to be fully filled, {amount} more {token} is required.',
    submit: "Submit Order",
    confirm_cancel_order: "Do you want to cancel this order?",
    confirm_cancel_all: "Are you sure to cancel all  {pair} orders ?",
    cancel_order_success: "Your order has been cancelled.",
    cancel_order_failed: "Woops, order cancellation somehow failed.",
    cancel_all_success: "All your {pair} orders have been cancelled.",
    cancel_all_failed: "Whoops, order cancellation somehow failed.",
    yes: "Confirm",
    no: "Cancel",
    cancel_all: "Cancel All",
    refresh: "Refresh",
    buy_token:"Buy {token}",
    receive_token:"Receive {token}",
    convert_token:"Convert {token}",
    why_buy_price_avaliable_but_could_not_deal:`
    <div class="p5">
        <div class="fs14 lh25"> Order Depth Tips </div>
        <div class="fs12">1. The depth maybe under matching: Miners may need some time to submit txs to ethereum.
  </div>
        <div class="fs12">2. The depth maybe deprecated: Miners's matching income (LRC Fee) is lower than matching cost ( ethereum gas ) </div>
    </div>
    `
  },
  ticker: {
    last: 'Last Price',
    change: 'Change',
    low: 'Low',
    high: 'High',
    vol: 'Volume',
    market: 'Market',
    favorites: 'Favorites',
    select_a_market:'Select a market',
    back_to_wallet:'Back to Wallet',
  },
  exchanges: {
    loopr: 'Loopring DEX Price',
    binance: 'Binance Price',
    okex: 'OKEx Price',
    huobi: 'Huobi Price',
  },
  home: {
    title: '',
    subtitle: "Portofel compatibil cu Ethereum si alte monede ERC20",//**'An ERC20 Ethereum wallet of dCipher.',*/
    beta_notification_title:'Can\'t wait to trade ?',
    beta_notifycation_content: 'Portofelul dCipher este inca in Beta, a nu se folosi pentru Productie',//*'dCipher wallet is still in its beta. Test with great caution!'*/
  },
  buttons: {
    unlock_wallet: "Deblocheaza Portofelul",/**'Unlock a Wallet',*/
    generate_wallet: "Genereaza un portofel nou",/**'Generate a Wallet',*/
	join_crowdsale: "Participa la 'Crowdsale'",/**'Join Crowdsale',*/
  },
  tabs: {
    my_open_orders: 'Open Orders',
    my_recent_trades: 'Recent Trades',
    my_portfolio: 'Portfolio',
    my_assets: 'Assets',
    my_orders: 'Orders',
    my_trades: 'Trades',
  },
  txs: {
    title: 'Tranzactii',/**'Transactions',*/
    status: 'Status',
    status_pending: 'In asteptare',/**'Pending',*/
    status_success: 'Reusite',/**'Succeeded',*/
    status_failed: 'Nereusite',/**'Failed',*/
    type: 'Tipuri',/**'Types',*/
    type_transfer: "Trimite",/**'Send',*/
    type_convert: "Converteste",/**'Convert',*/
    type_others: 'Altele',/**'Others',*/
    type_lrc_fee: 'LRC Fee',
    type_lrc_reward: 'LRC Reward',
    type_sell: 'Vinde',/**'Sell',*/
    type_buy: 'Cumpara',/**'Buy',*/
    buy: 'Cumpara',/**"Buy",*/
    type_convert_title_eth: 'Converteste in WETH',/**'Convert to WETH',*/
    type_convert_title_weth: 'Converteste in WETH',/**'Convert to ETH',*/
    type_receive: 'Primeste',/**'Receive',*/
    type_enable:  "Activeaza",/**'Enable',*/
    type_enable_title: "Enabled {symbol} to Trade",
    type_transfer_title: "{symbol} trimis",/** "Sent {symbol}",*/
    type_receive_title: "{symbol} primit", /**"Received {symbol}",*/
    type_buy_title: "Cumpara {symbol}",/**"Buy {symbol}",*/
    type_sell_title: "Vinde {symbol}",/**"Sell {symbol}",*/
    cancel_order: 'Canceled Order',
    cancel_all: 'Canceled All Orders',
    cancel_pair_order: "Canceled All {pair} Orders",
    others: "Altele",/**"Others",*/
    balance_not_enough_title:"Your {token} balance is insufficient!",
    balance_not_enough: "Your open orders collectively need {needed} {token} while you only have {balance} {token}. Some of your orders will not be fully filled",
    open_orders: "Opened Orders",
    value: "Value",
    tx_hash: "Tx Hash",
    block_num: "Block#",
    to: "To",
    confirm_time: "Confirm Time",
    tx_detail: "Transaction Details",
    success: "Succeeded",
    failed: "Failed",
    pending: "Pending",
    no_txs:'No data',
    resend:"Resend",
    resend_tips:"Increase gas price and resend this tx if you want it to be confirmed earlier. Only one of the two transactions will be confirmed, and only one transaction will be charged.",
    not_resend_tips:"Tx has already been confirmed, it doesn't need to be resent. ",
    resend_success:"Resent Successfully",
    resend_failed:"Resent Failed",
    can_not_resend:"Can't not resend",
    not_detail:"Can't get detail information of this tx.",
    resend_title:"The tx has not been confirmed for a long time.",
    margin_split:"Margin Split",
    fill_buy:"Buy",
    fill_sell:"Sell",
    miner_pay:"Miner paid gas cost for matching orders."
  },
  orders: {
    order: "Order",
    time: "Time",
    market: 'Markets',
    status: 'Status',
    status_opened: 'Open',
    status_completed: 'Completed',
    status_canceled: 'Cancelled',
    status_expired: 'Expired',
    side: 'Sides',
    side_sell: 'Sell',
    side_buy: 'Buy',
    create_time: 'Created',
    update_time: 'Updated',
    amount: 'Amount',
    price: 'Price',
    total: 'Total',
    LrcFee: 'Trading Fee',
    LrcReward:'Trading Reward',
    filled: 'Filled',
    options: "Options",
    balance_not_enough: "Your {token} balance is insufficient!",
    balance: "Balance",
    required: "Required",
    lacked: "Lacked",
    receive: "Receive {token}",
    buy: "Buy {token}",
    convert: "Convert to WETH",
    token_not_enough: "Your token balance is insufficient!",
    sell_amount: 'Sell Amount',
    buy_amount: 'Buy Amount',
    order_detail: "Order Details",
    basic_detail:"Basic Details",
    fill_detail:"Fill Details",
    cancel_cost_gas:"Cancel order will cost gas",
    auto_cancel_not_cost_gas:"Order expired costs no gas",
    manual_cancel_cost_gas:" Cancel order manually shall cost gas",
    cancel_order:"Cancel Order",
    canceling:"Canceling",
    order_canceling:"Order Canceling",
    order_validity:"Order Validity",
    wait_expire:"Wait for expiring automatically",
    confirm_to_cancel:"Confirm to Cancel Order",
    order_will_expire:"This order will be expired automatically in",
    expire_duration:"{days,plural,=0{} =1{1 day} other {# days}} {hours,plural,=0{} =1{1 hour} other {# hours}} {minutes,plural,=1{1 minute} other {# minutes}}",
    open_order_list:"Opened Orders"
  },
  settings: {
    preference: "Preferinte",/**"Preferences",*/
    trade: "Trading",
    relay: "Retele",/**"Relays",*/
    language: "Limba",/**"Language",*/
    currency: "Moneda",/**"Currency",*/
    timezone: "Timezone",
    reset: "Reset",
    contract: "Versiune Protocol",/**"Protocol Version",*/
    ttl: "Order Time-To-Live",
    ttl_tip: "Va rugam sa furnizati o valoare intreaga",/** "Please provide an integer value",*/
    lrcfee: "Trading Fee (LRC)",
    margin: "Default Margin Split",
    gasPrice: "Default Gas Price",
    slow: "Slower",
    fast: "Faster",
    edit: "Edit",
    save: "Save",
    delete: "Delete",
    addRelay: "Adauga o retea Custom",/**Add Custom Relay",*/
    editRelay: "Editeaza retea",/**"Edit Relay",*/
    chooseRelay: "Alege Retea",/**"Choose a relay",*/
    relayName: "Nume retea",/**"Relay Name",*/
    relayUrl: "Adresa URL Retea",/*"Relay URL",*/
    select: "Select"
  },
  trade: {
    orderForm: "Order Form",
    sell: "Sell",
    buy: "Buy",
    order_book:'Order Book',
    trade_history:'Trade History',
    balance: "Balance",
    price: "Price",
    price_verification_message: "Please input a valid price",
    amount: "Amount",
    amount_verification_message: "Please input a valid amount",
    available_amount: "Available Amount",
    available: "available",
    total: "Total",
    advanced: "Advanced",
    time_to_live: "Expire in",
    time_to_live_advance:'Valid Time',
    more: "More",
    popular_option: "Less",
    integer_verification_message: "Please input an integer value",
    second: "Second",
    minute: "Minute",
    hour: "Hour",
    day: "Day",
    week: "Week",
    month: "Month",
    lrc_fee: "Trading Fee",
    margin_split: "Margin Split",
    place_order: "Place Order",
    unlock_your_wallet: "Deblocheaza Portofelul",/**"Unlock a Wallet",*/
    to_trade: "Trade",
    lrcFee_increased: "We need to increase your order's trading fee from {userSet}LRC to a minimum of {increased}LRC. Do you want to continue?",
    notice: "Please notice",
    placing_order: 'Placing Order',
    place_order_failed: "Whoops, order submission somehow failed!",
    sign_order_failed:"Whoops, order signature somehow failed!",
    not_inWhiteList:"Whoops, your account has not been whitelisted for this action!",
    not_allow:"dCipher Wallet is still in its beta, please come back later when it's ready for more people to use.",
    you_should_do_things: "You should do things followed",
    failed_reasons: "Causes of failure:",
    why: "Why",
    balance_not_enough: 'Balance insufficient. At leaset {required} {token} is required.',
    receive: 'Receive',
    to_buy: 'Buy',
    time_to_live_input_place_holder: 'We recommend to set it between 1 hour and 1 day.',
    ring: "Ring",
    tips_time_to_live: "Your order is valid for a specified period known as Time-To-Live (TTL) and will expire automatically. Use this value to avoid canceling orders explicitly to save yourself some Ether. We recommend using amount between one hour and one day.",
    tips_lrc_fee: "The total fee in LRC to pay ring-miners to find counterparty orders that your order can trade with. The higher the fee is, the more likely and quicker your order will be matched and filled.",
    tips_margin_split: "If your account does not have enough LRC to pay miners, you can choose margin split to pay LRC Fee.</br>You can only choose either Margin Split or LRC Fee to pay the miners, so do not worry about double spending.</br>We do not recommend you modify this value unless you have fully understood its mechanism.",
    confirm_warn_ledger: "Please confirm transaction on your Ledger device, then come back to continue",
    confirm_warn_trezor: "Please confirm transaction on your Trezor device , then come back to continue",
    confirm_warn_metamask: "Please confirm transaction on your MetaMask browser extension, then come back to continue",
    place_order_trezor_unsupport: 'Could Not Place Order',
    place_order_trezor_unsupport_tips: 'When you place order we will send your order to relay with signature, but Trezor temporarily does not support sign messages, so when you unlock with Trezor is unable to place an order, but wallet operations(transfer, etc.) is not affected',
    place_order_watch_only_tips: 'You unlocked wallet with address only that could not sign orders, you could use other way to unlock and place order',
    custom_option_fee:'Set option for This Order',
    custom_lrc_fee_title:'Adjust Trading Fee',
    custom_time_to_live_title:'Adjust Order Time-To-Live',
    send_failed: 'Place Order Failed !',
    failed_fetch_data:'Failed fetch data from server, you could wait a moment and come back later',
    eth_is_required:'ETH is required to pay Ethereum transaction fees, calculated with your current order cost that need to send Ethereum transactions, totally required {required} ETH.',
    lrcfee_is_required:'LRC is required to pay trade fees, added on your history orders need LRC, totally required {required} LRC.',
    not_supported_token_to_trade_title:'{token} Is Not Supported To Trade Now',
    not_supported_token_to_trade_content:'Please look forward to opening more markets',
    not_allowed_place_order_worth_title: 'Order Amount Is Too Small',
    not_allowed_place_order_worth_content: 'Due to your total worth less than {worth}, you could not place this order',
    not_supported_market_title: "Not Supported Market",
    not_supported_market_content: "{market} is not supported market",
    current_lrc_fee_ratio:'LRC Fee Ratio',
    current_lrc_fee: 'LRC Fee',
    order_ttl_expire_in: 'Set Order Expire In',
    order_ttl_from_to: 'Set Order Valid Since and Until',
    not_supported_market:'Trading not supported currently'
  },
  trades: {
    side: 'Sides',
    side_sell: 'Sell',
    side_buy: 'Buy',
  },
  token: {
    convert_title: "Converteste",
    amount: "Suma",
    amount_verification_message: "Te rugam introduce o suma valida",
    convert_max: "Converteste Maxim",
    min_gas_remain_warn: "0.1 ETH sunt rezervati ca si taxa de gas .",
    no_eth_balance_warn: "Nu ai suficienti ETH sau Gas pentru a efectua tranzactia.",
    convert_confirm: "Da, Converteste Acum!",
    send_title: "Trimite",
    result_failed: "Tranzactie esuata {do} {amount} {token} - {reason}",
    completed: "Succes",
    result_success: "Tranzactie cu succes {do} {amount} {token}",
    result_convert_success: "Suma convertita cu succes {amount} {token}",
    result_transfer_success: "Suma trimisa cu succes {amount} {token}",
    view_transaction: 'Vezi tranzactia pe Etherscan.io',/** 'View Transaction on Etherscan.io',*/
    send_again: 'Trimite din nou',
    convert_again: 'Converteste din nou',
    ethereum_address: "Adresa portofelului meu Ethereum",/**"My Ethereum Address",*/
    copy: "Copiaza",/**"Copy",*/
    copy_success: "Copiere reusita",/**"Copy Successfully",*/
    copy_failed: "Copiere esuata",/**"Copy Failed",*/
    send: "Trimite",/**"Send",*/
    recipient: "Destinatar",
    eth_address_verification_message: "Adresa Ethereum invalida",/**"Invalid Ethereum address",*/
    send_max: "Trimite Maxim",
    transaction_fee: "Pret Gas",
    advanced: "Avansat",
    data: "Data",
    gas_limit: "Limita Gas",
    gas_price: "Pret Gas",
    continue: "Continua",
    slow: "Mai Incet",
    fast: "Mai Rapid",
    transfer_preview_title: "Esti aproape sa trimiti tranzactia",
    from: "De la",
    to: "Catre",
    gas: "Gas",
    transfer_cancel: "Nu, Anuleaza Tranzactia",
    transfer_send: "Da, Trimite Acum!",
    to_confirm_title: "In Asteptarea Confirmarii",
    to_confirm_ledger_content: "Te rog sa confirmi tranzactia cu ajutorul ledgerului",
    select_token: "Token",
    token_selector_placeholder: 'Selecteaza Token',
    token_select_verification_message: "Te rugam selecteaza un token",
    transfer_result_title: "Care about the result?",
    transfer_result_etherscan: "Verifica tranzactia in Etherscan.io",
    transfer_again_title: "Vrei sa mai executi o tranzactie?",
    transfer_again_send: "Trimite din Nou",
    transfer_again_convert: "Converteste din Nou",
    add_custom_token_tip:"Te rugam introdu o adresa valida ",
    send_failed: 'Trimitere Esuata!',
    convert_failed: 'Convertire Esuata',
    recommended_value:"Valoarea Recomandata:",
    convert_succ_notification_title: 'Convertire cu succes!',
    transfer_succ_notification_title: 'Transfer cu succes!',
    custum_gas_title:'Modifica Gas',
    custum_gas_content:'iti recomandam sa setezi {gas}',
    custum_gas_advance_content:'iti recomandam sa setezi GasLimit la {gasLimit}, si GasPrice la {gasPrice}',
    token_convert:'Converteste {de la} to {catre}',
    gas_fast_setting: 'Setari rapide',
    gas_custom_setting: 'Setari Personalizate'
  },
  airdrop:{
    cost_eth_gas:"Binding address takes one Ethereum transaction.",
    goback:"Back",
    watch_only_not_allowed:"Watch-only mode cannot bind addresses.",
    eth_adress_null:'Please unlocked your wallet and try again',
    neo_address_null:'Please input your valid NEO address to bind'
  },
  mnemonic:{
    default_address:'Cont prestabilit',/**'Default Address',*/
    unlock_default_address:'Deblocati contul prestabilit',/*'Unlock Default Address',*/
    choose_other_address:'Selectati alt cont',/*'Select Other Address',*/
  },
  wallet: {
    bind_tip: "Airdrop Binding",
    cu_bind_address: "Current Bound Address",
    airdrop: "Airdrop",
    binding: "Address Bound successfully!",
    bind_type: "Type",
    type_tip: "Select Token to Bind",
    address_tip: "{project} address",
    get_address:"Where to get a {project} account",
    go_to:"Visit {project}",
    address: "Address",
    bind_address: "Bind",
    bound_address:"Bound {token} Address",
    no_bound:"No bound address found",
    to_bind_address: "Bind",
    to_edit: "Edit",
    bind_type_address: "Bind {type} Address",
    bind_address_confirm: "Bind your {project} address: {address} to your wallet?",
    bind_success:"Bind Successfully",
    bind_failed:"Bind Failed",
    aaring_on: "Hub token on  {project}",
    neo: "NEO",
    qtum: "QTUM",
    unlock_tip: "Cum vrei sa accesezi portofelul",/**"How would you like to access your wallet",*/
    metamask: "MetaMask Wallet",
    trezor: "TREZOR",
    ledger: "Ledger Wallet",
    keystore: "Keystore",
    privateKey: "PrivateKey",
    mnemonic: "Mnemonic",
    no_wallet: "Nu ai un portofel? Hai sa", /**"Don't have a wallet? Let's",*/
    generate_one: "generam unul nou",/**"generate one",*/
    error_title: "Eroare",/**"Error",*/
    failed_connect_ledger_title: "Conectarea cu 'Ledger Wallet' a esuat!",/**'Failed to connect with Ledger Wallet!',*/
    content_ledger_unlock_require_https: "Unlocking a Ledger hardware wallet is only possible on pages served over HTTPS",
    content_ledger_connect_failed: "Failed to connect with your Ledger device, you could follow these advices and have a try later. 1、Make sure your Ledger device has connected with your computer and unlocked. 2、Set this to 'yes': Settings->Browser support 3、Enter into Ethereum app",
    content_leder_locked: "Your Ledger seems to be locked",
    recommended: "Recomandat",/**"Recommended",*/
    recommend_way: "This is a recommended way to access your wallet.",
    connect_to_ledger: "Conectati-va cu Ledger",/**"Connect to Ledger",*/
    failed_connect_metamask_title: 'Failed To Connect With MetaMask',
    content_metamask_mainnet: "We only support Ethereum mainnet when using MetaMask",
    title_metamask_logout: "Logout From MetaMask",
    content_metamask_logout: "We detected you have logged out from MetaMask, for your assets safety we have relocked your wallet",
    content_metamask_unlock_again: "We detected your computer or MetaMask network has changed, for your assets safety we have relocked your wallet, you should make sure your MetaMask is using MainNetwork and unlock your wallet again",
    content_metamask_install: "Your may need to install MetaMask extension to your browser first, please reload our page after installed",
    content_metamask_locked: "Failed to connect with MetaMask, please unlock and use",
    content_metamask_install_title:'You should install MetaMask first',
    content_metamask_locked_title:'You should unlock your MetaMask first',
    get_metamask: "Descarca extensia MetaMask pentru {browser}", /**"Get MetaMask {browser} extension",*/
    get_metamask_visit: "Viziteaza site-ul Metamask",/**'Visit MetaMask website',*/
    connect_to_metamask: "Conecteaza-te la MetaMask",/**"Connect To MetaMask",*/
    connect_to_metamask_not_supported_browser: "Browserul dvs nu suporta MetaMask, incercati pe Chrome",/**"Your Browser do not support MetaMask, try Chrome instead",*/
    download_chrome: "Descarcati Chrome",/**"Download Chrome",*/
    metamask_to_unlock: "Pentru a debloca MetaMask",/**'To Unlock MetaMask',*/
    metamask_to_install: "Pentru a instala MetaMask",/**'To Install MetaMask',*/
    metamask_unlock_steps_title:"Pasi pe care ar trebui sa ii faceti",/**'Steps You Should Do',*/
    metamask_unlock_refresh_button: "Gata? Reincarcati Portofelul",/**'All Done? Refresh Wallet',*/
    metamask_unlock_cancel_button: 'Cancel',
    metamask_unlock_step_install_title: "Instalati Metamask",/**'Install MetaMask',*/
    metamask_unlock_step_install_content:"Instalati extensia MetaMask compatibila cu browserul Dvs. ",/**'Install MetaMask extension for your browser',*/
    metamask_unlock_step_unlock_title:"Deblocati MetaMask",/**'Unlock MetaMask',*/
    metamask_unlock_step_unlock_content:"Pentru a creea un cont nou sau pentru a debloca cu MetaMask",/**'To create an account or unlock with MetaMask',*/
    metamask_unlock_step_refresh_title: "Reincarcare Portofel",/**'Refresh Wallet',*/
    metamask_unlock_step_refresh_content:"Relogati-va in portofel pentru a activa extensia MetaMask",/**'Refresh wallet to enable MetaMask',*/
    recommend_tip: "Aceasta este metoda recomandata de dCipher de accesare a portofelului.",/**"This is a recommended way to access your wallet.",*/
    not_recommended: "Nerecomandat",/**"Not Recommended",*/
    not_recommended_tip: "Aceasta nu este o metoda recomandate pentru a accesa portofelul.",/**"This is a NOT recommended way to access your wallet.",*/
    select_keystore: "Introduceti continutul Keystore-ul sau selectati fisierul keystore ",/**"Paste your keystore or select your keystore file",*/
    select_json: "Selectati fisierul JSON",/**"Select JSON File",*/
    unlock: "Deblocati",/**"Unlock",*/
    password: "Parola",/**"Password",*/
    password_tip:"Va rugam sa introduceti parola",/**"Please input your password",*/
    password_strength:"Password Strength",
    weak:"weak",
    average:"average",
    strong:"strong",
    connect_trezor: "Conectati-va cu Trezor",/**"Connect To Trezor",*/
    paste_mnemonic: "Introduceti Mnemonic-ul aici",/*"Paste Your Mnemonic Here",*/
    select_wallet: "Selectati tipul de portofel",/**"Select Your Wallet Type",*/
    select_path:"Select  Dpath ",
    optional: "Optional",
    mnemonic_tip: "Introduceti o fraza valabila.",/**"Please input valid phrase",*/
    paste_privatekey: "Introduceti Cheia Privata",/**"Paste Your PrivateKey Here",*/
    invalid_privateKey: "Cheie Privata invalida",/**"Invalid Private Key",*/
    select_account: "Selectati contul",/**"Select Your Account",*/
    custom_path:"Your custom path",
    select_address:"Select your address",
    no_address:"There aren't legal addresses",
    pre_page: "Previous Page",
    next_page: "Next Page",
    import:"Import",
    confirm: "Confirm",
    cancel: "Cancel",
    generate_wallet: "Generati portofel nou",/**"Generate Wallet",*/
    generate: "Generati acum",/**"Generate Now",*/
    have_one: "Aveti deja portofel",/**"Already have a wallet",*/
    to_unlock: "Deblocheaza Portofelul",/**"Unlock a Wallet",*/
    set_password: "Setati o parola puternica",/*"Set a strong password",*/
    parse_failed:"Parse Keystore Failed",
    decrypt_failed:"Decriptarea cheii de stocare a esuat",/*"Decrypt Keystore Failed",*/
    find_more_address:"{address} nu este adresa mea, cautati mai multe adrese",/**"{address} isn't my address, look for more addresses",*/
    confirm_address_unlock:"{address} is my address, unlock",
    compute_address:"Computed Address",
    compute_more_address:"Compute more addresses",
    backup: {
      backup_wallet: "Backup Wallet",
      keystore: "Keystore",
      privatekey: "PrivateKey",
      mnemonic: "Mnemonic",
      not_lose: "Nu le pierdeti",/**"Don't lose It",*/
      not_share: "Nu le impartasiti cu altcineva",/**"Do not share it",*/
      not_recover: "Nu pot fi recuperate in caz de pierdere",/**'It cannot be recovered if you lose it',*/
      stolen: "Fondurile dumneavostra pot fi furate daca folositi acest fisier pe site-uri false ",/**"Your funds will be stolen if you use this file on a malicious/phishing site.",*/
      backup: "Make a backup",
      backup_tip: "Portofelul dCipher nu pastreaza informatii despre contul tau. Asigura-ti-va ca faceti backup la aceste informatii imediat.",/**'dCipher doesn\'t keep a copy of your privatekey, keystore file, or mnemonic words. Make sure you back up these information immediately.',*/
      secure: "Secure it like the millions of dollars it may one day be worth.",
      download: "I understand, download the wallet file.",
      copy_mnemonic: "I understand, copy the mnemonic phrases.",
      copy_privatekey: "I understand, copy the privatekey.",
      wrong_password: "Wrong password~",
      input_password: "Please provide your password.",
      get_keystore: "Get Keystore",
      download_keystore: "Download Keystore File",
      copy_keystore: "Copy Keystore",
      enter_wallet_password: "Enter the wallet password",
      enter_password: "Enter a password to protect your wallet.",
      file_keystore: "File Keystore",
      text_keystore: "Text Keystore",
      qr_keystore: "Qrcode Keystore",
      leave_backup_page:"Go To My Wallet",
      confirm_to_leave_backup_page:"Sunteti sigur ca nu vreti sa faceti backup la portofelul nou generat?",/**"Are you certain not to back up the generated wallet?"*/
    },
    token: "Token",
    title_metamask_account_change: "Contul din MetaMask a fost schimbat.",/**"Account changed in MetaMask",*/
    content_metamask_account_change:"Am detectat ca ati schimbat contul din MetaMask, vom folosi contul nou.", /** "dCipher wallet detected your address in MetaMask has just changed. The old one is closed and the new one will be used instead.",*/
    old_weth_detect: "We detected you have some outdated WETH token, we strongly suggest you to convert them back to Ether",
    to_convert: "Convert",
    instruction_trezor: '',
    instruction_ledger: '',
    instruction_metamask: '',
    instruction_keystore: "Deblocarea fisierelor de tip keystore in pagini web poate fi periculoasa, continuati cu atentie!",/**'Unlocking keystore files in web pages can be dangerous. Proceed with caution.',*/
    instruction_mnemonic: "Dezvaluirea expresiilor dvs. mnemonice pe site-urile web este extrem de periculoasa. Daca site-ul este compromis sau daca vizitati în mod accidental un site de tip phishing, activele dvs. In toate adresele asociate pot fi furate.",/**'Revealing your mnemonic phrases on web sites is highly dangerous. If the site is compromised or you accidentally visit a phishing website, your assets in all associated addresses can be stolen.',*/
    instruction_privatekey: "Dezvaluirea cheii dvs. private pe site-uri Web este extrem de periculoasa. Daca site-ul este compromis sau daca accesati în mod accidental un site de tip 'phishing', activele dvs. pot fi furate.",/**'Revealing your private key on web sites is highly dangerous. If the site is compromised or you accidentally visit a phishing website, your assets can be stolen.',*/
    instruction_address: "Daca doar vrei sa verifici balanta portfelului tau foloseste modul 'Watch-only' ",/**'If you simply want to check balances, transaction and trading histories, use this watch-only mode to avoid all potential security risks',*/
    nonce: 'Nonce',
    watch_only: 'Watch-Only',
    address_input_placeholder:'Adresa portofelului tau',/** 'Your address',*/
    unlock_by_address: 'Deblocheaza cu adresa portofelului',/**'Unlock with your address',*/
    invalid_eth_address: 'Adresa invalida',/**'Invalid Ethereum address',*/
    unlocked_notification_title: 'Portofelul tau a fost deblocat cu succes.',/**'Your wallet has been unlocked successfully.',   */
    unlocked_by:'{type} Wallet',
    type_address:'Watch-Only',
    type_metamask:'MetaMask',
    type_trezor:'TREZOR',
    type_ledger:'Ledger Wallet',
    type_keystore:'KeyStore',
    type_mnemonic:'Mnemonic',
    type_privatekey:'PrivateKey',
    type_demo:'Demo Wallet',
    type_lock:'Locked Wallet',
    in_watch_only_mode_title:'Schimbat in modul "Watch-only"',/**'Switched to "Watch-only Mode"',*/
    using_watch_only_mode_title:"Portofelul este folosit in modul 'Watch-Only'",/**'You Are Now using Watch-only Mode',*/
    unlock_by_cookie_address_notification:"Portofelul este folosit in modul 'Watch-Only'",/**'You are in watch-only mode now',*/
    in_watch_only_mode_content: "Portofelul este folosit in modul 'Watch-Only'.Pentru aceasta operatiune trebuie deblocat portofelul. ",/**'Your account is still in the watch-only mode. To perform this operation, you need to unlock your wallet again.',*/
    in_demo_account_mode_content: "Momentan folositi un cont demo.Pentru aceasta operatiune trebuie deblocat portofelul.",/**'You are now using demo account. To perform this operation, you need to unlock your wallet again.',*/
    continue_watch:"Continuati in modul 'Watch-Only'",/**"Continue Watch-Only',*/
    metamask_installed_locked_title: 'Incercam deblocarea cu ajutorul MetaMask',/**'Trying to unlock with MetaMask',*/
    metamask_installed_locked_content: 'We detected you have installed MetaMask browser extension and want to unlock wallet with it, please created or unlocked an account in MetaMask first, then try to unlock with MetaMask in wallet again',
  },
  demo:{
    badge_title:'Cont portofel Demo',/**'Demo Wallet',*/
    badge_tip:'You are using a demo wallet in the watch-only mode',
    confirm_title: 'Try wallet with a demo wallet',
    confirm_instruction: '❗️This demo wallet is a watch-only wallet; <br />🚫This demo wallet cannot bind airdrop addresses;<br />🚫This demo wallet cannot sign and send transactions;<br />🚫This demo wallet cannot trade.',
    confirm_btn: "Confirm",
    airdrop_not_allowed: "Demo wallet can not bind address for airdrop",
  },
  tokens: {
    hide_small_balances: "Ascunde monedele cu balanta mica", /**" Hide tokens with small balance", */
    only_show_favorites: "Arata doar monedele adaugate la favorit",/**"Only show my favorites",*/
    options: "Optiuni",/**"Options",*/
    options_transfer: "Trimite moneda",/**"Send",*/
    options_receive: "Primeste moneda",/**"Receive",*/
    options_convert: "Converteste",/**"Convert", */
    options_trade: "Tranzactioneaza",/**"Trade",*/
    options_edit: "Editeaza",/**"Edit",*/
    add_token: " Adauga moneda custom de tip ERC20",/**" Add Custom ERC20 Token",*/
    coming_soon: "In curand!",
    token_address: "Adresa Contract",/**"Token Contract Address",*/
    token_name: "Nume Moneda", /**"Token Name", */
    token_symbol: "Simbol Moneda",/**"Token Symbol",*/
    token_digits: "Zecimale Moneda",/**"Token Digits", */
    confirm_save: "Salveaza",/**"Save", */
    save_successfully: "Moneda a fost adaugata cu succes",/**"Token added successfully", */
    supportToken: "Moneda exista deja",/**"This token has already been added.", */
    add_token_failed: "Nu au putut fi citite informatiile despre moneda din reteaua Ethereum ",/**"Failed to read the token's information from Ethereum blockchain.", */
    already_add: "Moneda exista deja"/**"This token has already been added."*/
  },
  portfolio: {
    total_value: "Valoare Totala",/**"Total Value", */
    asset_currency_ratio: "Proportie"/**"Ratio" */
  },
  ring: {
    ring_info:"Ring Information",
    ring_detail:'Ring Details',
    ring_hash:"Ring Hash",
    ring_index:"Ring Index",
    miner:"Miner",
    total_lrc_fee:"Trading Fee",
    total_split_fee:"Trading Fee (Margin-Split)",
    time:'Time',
    trade_amount:"Filled Amount",
    fee_recipient:"Fee Recipient",
    ring_more_info:"",
    no_ring:"No Such Ring"
  }
}
