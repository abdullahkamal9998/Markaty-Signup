import styles from "./Progress.module.css";

const SuccessFirstStep = () => {
  return (
    <div className={styles.progress}>
      <svg
        width="200"
        height="78"
        viewBox="0 0 200 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_9130)">
          <rect x="88" width="24" height="24" rx="12" fill="#12B76A" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M105.097 7.39004L97.9365 14.3L96.0365 12.27C95.6865 11.94 95.1365 11.92 94.7365 12.2C94.3465 12.49 94.2365 13 94.4765 13.41L96.7265 17.07C96.9465 17.41 97.3265 17.62 97.7565 17.62C98.1665 17.62 98.5565 17.41 98.7765 17.07C99.1365 16.6 106.007 8.41004 106.007 8.41004C106.907 7.49004 105.817 6.68004 105.097 7.38004V7.39004Z"
            fill="white"
          />
        </g>
        <path
          d="M60.3317 42.8182H62.4148L64.9055 47.3224H65.005L67.4957 42.8182H69.5788L65.875 49.2017V53H64.0355V49.2017L60.3317 42.8182ZM72.7147 53.1491C71.9689 53.1491 71.3226 52.9851 70.7757 52.657C70.2289 52.3288 69.8046 51.8698 69.503 51.2798C69.2047 50.6899 69.0556 50.0005 69.0556 49.2116C69.0556 48.4228 69.2047 47.7318 69.503 47.1385C69.8046 46.5452 70.2289 46.0845 70.7757 45.7564C71.3226 45.4283 71.9689 45.2642 72.7147 45.2642C73.4604 45.2642 74.1067 45.4283 74.6536 45.7564C75.2005 46.0845 75.623 46.5452 75.9213 47.1385C76.223 47.7318 76.3738 48.4228 76.3738 49.2116C76.3738 50.0005 76.223 50.6899 75.9213 51.2798C75.623 51.8698 75.2005 52.3288 74.6536 52.657C74.1067 52.9851 73.4604 53.1491 72.7147 53.1491ZM72.7246 51.7074C73.129 51.7074 73.467 51.5964 73.7388 51.3743C74.0106 51.1489 74.2128 50.8473 74.3453 50.4695C74.4812 50.0916 74.5492 49.6707 74.5492 49.2067C74.5492 48.7393 74.4812 48.3168 74.3453 47.9389C74.2128 47.5578 74.0106 47.2545 73.7388 47.0291C73.467 46.8037 73.129 46.6911 72.7246 46.6911C72.3103 46.6911 71.9656 46.8037 71.6905 47.0291C71.4187 47.2545 71.2149 47.5578 71.079 47.9389C70.9464 48.3168 70.8801 48.7393 70.8801 49.2067C70.8801 49.6707 70.9464 50.0916 71.079 50.4695C71.2149 50.8473 71.4187 51.1489 71.6905 51.3743C71.9656 51.5964 72.3103 51.7074 72.7246 51.7074ZM82.7685 49.7884V45.3636H84.5682V53H82.8232V51.6428H82.7436C82.5713 52.0703 82.2879 52.42 81.8935 52.6918C81.5024 52.9635 81.0201 53.0994 80.4467 53.0994C79.9463 53.0994 79.5038 52.9884 79.1193 52.7663C78.7382 52.541 78.4399 52.2145 78.2244 51.7869C78.009 51.3561 77.9013 50.8357 77.9013 50.2259V45.3636H79.701V49.9474C79.701 50.4313 79.8336 50.8158 80.0987 51.1009C80.3639 51.3859 80.7119 51.5284 81.1428 51.5284C81.4079 51.5284 81.6648 51.4638 81.9134 51.3345C82.1619 51.2053 82.3658 51.013 82.5249 50.7578C82.6873 50.4993 82.7685 50.1761 82.7685 49.7884ZM86.4189 53V45.3636H88.1639V46.6364H88.2434C88.3826 46.1955 88.6213 45.8558 88.9593 45.6172C89.3007 45.3752 89.6902 45.2543 90.1277 45.2543C90.2271 45.2543 90.3381 45.2592 90.4608 45.2692C90.5867 45.2758 90.6911 45.2874 90.774 45.304V46.9595C90.6977 46.933 90.5768 46.9098 90.411 46.8899C90.2486 46.8667 90.0912 46.8551 89.9387 46.8551C89.6106 46.8551 89.3156 46.9264 89.0538 47.0689C88.7953 47.2081 88.5914 47.402 88.4423 47.6506C88.2931 47.8991 88.2186 48.1858 88.2186 48.5107V53H86.4189ZM98.2761 53.1342C97.6762 53.1342 97.1393 52.9801 96.6653 52.6719C96.1913 52.3636 95.8168 51.9162 95.5417 51.3295C95.2666 50.7429 95.1291 50.0303 95.1291 49.1918C95.1291 48.3433 95.2683 47.6274 95.5467 47.044C95.8284 46.4574 96.2079 46.0149 96.6852 45.7166C97.1625 45.415 97.6944 45.2642 98.2811 45.2642C98.7285 45.2642 99.0964 45.3404 99.3848 45.4929C99.6731 45.642 99.9018 45.8227 100.071 46.0348C100.24 46.2436 100.371 46.4408 100.464 46.6264H100.538V42.8182H102.343V53H100.573V51.7969H100.464C100.371 51.9825 100.237 52.1797 100.061 52.3885C99.8852 52.594 99.6532 52.7696 99.3649 52.9155C99.0765 53.0613 98.7136 53.1342 98.2761 53.1342ZM98.7782 51.6577C99.1594 51.6577 99.4842 51.5549 99.7527 51.3494C100.021 51.1406 100.225 50.8506 100.364 50.4794C100.503 50.1082 100.573 49.6757 100.573 49.1818C100.573 48.688 100.503 48.2588 100.364 47.8942C100.228 47.5296 100.026 47.2462 99.7576 47.044C99.4925 46.8419 99.166 46.7408 98.7782 46.7408C98.3772 46.7408 98.0424 46.8452 97.774 47.054C97.5055 47.2628 97.3033 47.5511 97.1674 47.919C97.0315 48.2869 96.9636 48.7079 96.9636 49.1818C96.9636 49.6591 97.0315 50.085 97.1674 50.4595C97.3066 50.8307 97.5105 51.1241 97.7789 51.3395C98.0507 51.5516 98.3838 51.6577 98.7782 51.6577ZM107.641 53.1491C106.876 53.1491 106.214 52.9901 105.658 52.6719C105.104 52.3504 104.678 51.8963 104.38 51.3097C104.082 50.7197 103.933 50.0253 103.933 49.2266C103.933 48.4411 104.082 47.7517 104.38 47.1584C104.682 46.5618 105.103 46.0978 105.643 45.7663C106.183 45.4316 106.818 45.2642 107.547 45.2642C108.018 45.2642 108.462 45.3404 108.879 45.4929C109.3 45.642 109.671 45.8741 109.993 46.1889C110.318 46.5038 110.573 46.9048 110.759 47.392C110.944 47.8759 111.037 48.4527 111.037 49.1222V49.674H104.778V48.4609H109.312C109.308 48.1162 109.234 47.8097 109.088 47.5412C108.942 47.2694 108.738 47.0556 108.477 46.8999C108.218 46.7441 107.916 46.6662 107.572 46.6662C107.204 46.6662 106.881 46.7557 106.602 46.9347C106.324 47.1103 106.107 47.3423 105.951 47.6307C105.799 47.9157 105.721 48.2289 105.717 48.5703V49.6293C105.717 50.0734 105.799 50.4545 105.961 50.7727C106.123 51.0876 106.35 51.3295 106.642 51.4986C106.934 51.6643 107.275 51.7472 107.666 51.7472C107.928 51.7472 108.165 51.7107 108.377 51.6378C108.589 51.5616 108.773 51.4505 108.929 51.3047C109.085 51.1589 109.202 50.9782 109.282 50.7628L110.962 50.9517C110.856 51.3958 110.654 51.7836 110.356 52.1151C110.061 52.4432 109.683 52.6984 109.222 52.8807C108.762 53.0597 108.235 53.1491 107.641 53.1491ZM116.373 45.3636V46.7557H111.983V45.3636H116.373ZM113.067 43.5341H114.866V50.7031C114.866 50.9451 114.903 51.1307 114.976 51.2599C115.052 51.3859 115.151 51.4721 115.274 51.5185C115.397 51.5649 115.532 51.5881 115.682 51.5881C115.794 51.5881 115.897 51.5798 115.99 51.5632C116.086 51.5466 116.159 51.5317 116.209 51.5185L116.512 52.9254C116.416 52.9586 116.278 52.995 116.099 53.0348C115.924 53.0746 115.708 53.0978 115.453 53.1044C115.002 53.1177 114.596 53.0497 114.235 52.9006C113.874 52.7481 113.587 52.5128 113.375 52.1946C113.166 51.8764 113.063 51.4787 113.067 51.0014V43.5341ZM120.075 53.1541C119.591 53.1541 119.156 53.0679 118.768 52.8956C118.383 52.7199 118.078 52.4614 117.853 52.12C117.631 51.7786 117.52 51.3577 117.52 50.8572C117.52 50.4264 117.599 50.0701 117.759 49.7884C117.918 49.5066 118.135 49.2812 118.41 49.1122C118.685 48.9432 118.995 48.8156 119.339 48.7294C119.688 48.6399 120.047 48.5753 120.418 48.5355C120.866 48.4891 121.229 48.4477 121.507 48.4112C121.786 48.3714 121.988 48.3118 122.114 48.2322C122.243 48.1494 122.308 48.0218 122.308 47.8494V47.8196C122.308 47.4451 122.196 47.1551 121.974 46.9496C121.752 46.7441 121.433 46.6413 121.015 46.6413C120.574 46.6413 120.224 46.7375 119.966 46.9297C119.711 47.1219 119.538 47.349 119.449 47.6108L117.768 47.3722C117.901 46.9081 118.12 46.5204 118.425 46.2088C118.73 45.8939 119.103 45.6586 119.543 45.5028C119.984 45.3438 120.471 45.2642 121.005 45.2642C121.373 45.2642 121.739 45.3073 122.104 45.3935C122.468 45.4796 122.801 45.6222 123.103 45.821C123.405 46.0166 123.647 46.2834 123.829 46.6214C124.014 46.9595 124.107 47.3821 124.107 47.8892V53H122.377V51.951H122.317C122.208 52.1631 122.054 52.362 121.855 52.5476C121.66 52.7299 121.413 52.8774 121.114 52.9901C120.819 53.0994 120.473 53.1541 120.075 53.1541ZM120.543 51.8317C120.904 51.8317 121.217 51.7604 121.482 51.6179C121.747 51.4721 121.951 51.2798 122.094 51.0412C122.24 50.8026 122.312 50.5424 122.312 50.2607V49.3608C122.256 49.4072 122.16 49.4503 122.024 49.4901C121.892 49.5298 121.742 49.5646 121.577 49.5945C121.411 49.6243 121.247 49.6508 121.085 49.674C120.922 49.6972 120.781 49.7171 120.662 49.7337C120.393 49.7701 120.153 49.8298 119.941 49.9126C119.729 49.9955 119.562 50.1115 119.439 50.2607C119.316 50.4065 119.255 50.5954 119.255 50.8274C119.255 51.1589 119.376 51.4091 119.618 51.5781C119.86 51.7472 120.168 51.8317 120.543 51.8317ZM125.917 53V45.3636H127.717V53H125.917ZM126.822 44.2798C126.537 44.2798 126.291 44.1854 126.086 43.9964C125.88 43.8042 125.778 43.5739 125.778 43.3054C125.778 43.0336 125.88 42.8033 126.086 42.6143C126.291 42.4221 126.537 42.326 126.822 42.326C127.11 42.326 127.355 42.4221 127.558 42.6143C127.763 42.8033 127.866 43.0336 127.866 43.3054C127.866 43.5739 127.763 43.8042 127.558 43.9964C127.355 44.1854 127.11 44.2798 126.822 44.2798ZM131.367 42.8182V53H129.567V42.8182H131.367ZM139.253 47.3821L137.613 47.5611C137.566 47.3954 137.485 47.2396 137.369 47.0938C137.256 46.9479 137.104 46.8303 136.912 46.7408C136.719 46.6513 136.484 46.6065 136.206 46.6065C135.831 46.6065 135.516 46.6877 135.261 46.8501C135.009 47.0125 134.885 47.223 134.888 47.4815C134.885 47.7036 134.966 47.8842 135.132 48.0234C135.301 48.1626 135.579 48.277 135.967 48.3665L137.27 48.6449C137.992 48.8007 138.529 49.0476 138.88 49.3857C139.235 49.7237 139.414 50.1662 139.417 50.7131C139.414 51.1937 139.273 51.6179 138.995 51.9858C138.72 52.3504 138.337 52.6354 137.846 52.8409C137.356 53.0464 136.792 53.1491 136.156 53.1491C135.221 53.1491 134.469 52.9536 133.899 52.5625C133.329 52.1681 132.989 51.6196 132.88 50.9169L134.635 50.7479C134.714 51.0926 134.883 51.3527 135.142 51.5284C135.4 51.7041 135.737 51.7919 136.151 51.7919C136.578 51.7919 136.922 51.7041 137.18 51.5284C137.442 51.3527 137.573 51.1357 137.573 50.8771C137.573 50.6584 137.488 50.4777 137.319 50.3352C137.154 50.1927 136.895 50.0833 136.544 50.0071L135.241 49.7337C134.509 49.5812 133.967 49.3243 133.615 48.9631C133.264 48.5985 133.09 48.1378 133.093 47.581C133.09 47.1103 133.218 46.7027 133.476 46.358C133.738 46.0099 134.101 45.7415 134.565 45.5526C135.032 45.3603 135.571 45.2642 136.181 45.2642C137.076 45.2642 137.78 45.4548 138.294 45.8359C138.811 46.2171 139.131 46.7325 139.253 47.3821Z"
          fill="#12B76A"
        />
        <path
          d="M15.006 72V63.2727H17.9549C18.6396 63.2727 19.1992 63.3963 19.6339 63.6435C20.0714 63.8878 20.3952 64.2188 20.6055 64.6364C20.8157 65.054 20.9208 65.5199 20.9208 66.0341C20.9208 66.5483 20.8157 67.0156 20.6055 67.4361C20.3981 67.8565 20.0771 68.1918 19.6424 68.4418C19.2077 68.6889 18.6509 68.8125 17.9719 68.8125H15.8583V67.875H17.9379C18.4066 67.875 18.783 67.794 19.0671 67.6321C19.3512 67.4702 19.5572 67.2514 19.685 66.9759C19.8157 66.6974 19.881 66.3835 19.881 66.0341C19.881 65.6847 19.8157 65.3722 19.685 65.0966C19.5572 64.821 19.3498 64.6051 19.0629 64.4489C18.7759 64.2898 18.3952 64.2102 17.9208 64.2102H16.0629V72H15.006ZM22.4869 72V65.4545H23.4585V66.4432H23.5266C23.646 66.1193 23.8619 65.8565 24.1744 65.6548C24.4869 65.4531 24.8391 65.3523 25.2312 65.3523C25.305 65.3523 25.3974 65.3537 25.5082 65.3565C25.619 65.3594 25.7028 65.3636 25.7596 65.3693V66.392C25.7255 66.3835 25.6474 66.3707 25.5252 66.3537C25.4059 66.3338 25.2795 66.3239 25.146 66.3239C24.8278 66.3239 24.5437 66.3906 24.2937 66.5241C24.0465 66.6548 23.8505 66.8366 23.7056 67.0696C23.5636 67.2997 23.4925 67.5625 23.4925 67.858V72H22.4869ZM29.4116 72.1364C28.8207 72.1364 28.3022 71.9957 27.8562 71.7145C27.413 71.4332 27.0664 71.0398 26.8164 70.5341C26.5692 70.0284 26.4457 69.4375 26.4457 68.7614C26.4457 68.0795 26.5692 67.4844 26.8164 66.9759C27.0664 66.4673 27.413 66.0724 27.8562 65.7912C28.3022 65.5099 28.8207 65.3693 29.4116 65.3693C30.0025 65.3693 30.5195 65.5099 30.9627 65.7912C31.4087 66.0724 31.7553 66.4673 32.0025 66.9759C32.2525 67.4844 32.3775 68.0795 32.3775 68.7614C32.3775 69.4375 32.2525 70.0284 32.0025 70.5341C31.7553 71.0398 31.4087 71.4332 30.9627 71.7145C30.5195 71.9957 30.0025 72.1364 29.4116 72.1364ZM29.4116 71.233C29.8604 71.233 30.2298 71.1179 30.5195 70.8878C30.8093 70.6577 31.0238 70.3551 31.163 69.9801C31.3022 69.6051 31.3718 69.1989 31.3718 68.7614C31.3718 68.3239 31.3022 67.9162 31.163 67.5384C31.0238 67.1605 30.8093 66.8551 30.5195 66.6222C30.2298 66.3892 29.8604 66.2727 29.4116 66.2727C28.9627 66.2727 28.5934 66.3892 28.3036 66.6222C28.0138 66.8551 27.7994 67.1605 27.6602 67.5384C27.521 67.9162 27.4513 68.3239 27.4513 68.7614C27.4513 69.1989 27.521 69.6051 27.6602 69.9801C27.7994 70.3551 28.0138 70.6577 28.3036 70.8878C28.5934 71.1179 28.9627 71.233 29.4116 71.233ZM39.0305 65.4545L36.6101 72H35.5874L33.1669 65.4545H34.2578L36.0646 70.6705H36.1328L37.9396 65.4545H39.0305ZM40.358 72V65.4545H41.3636V72H40.358ZM40.8693 64.3636C40.6733 64.3636 40.5043 64.2969 40.3622 64.1634C40.223 64.0298 40.1534 63.8693 40.1534 63.6818C40.1534 63.4943 40.223 63.3338 40.3622 63.2003C40.5043 63.0668 40.6733 63 40.8693 63C41.0653 63 41.233 63.0668 41.3722 63.2003C41.5142 63.3338 41.5852 63.4943 41.5852 63.6818C41.5852 63.8693 41.5142 64.0298 41.3722 64.1634C41.233 64.2969 41.0653 64.3636 40.8693 64.3636ZM45.6772 72.1364C45.1317 72.1364 44.6502 71.9986 44.2326 71.723C43.815 71.4446 43.4883 71.0526 43.2525 70.5469C43.0167 70.0384 42.8988 69.4375 42.8988 68.7443C42.8988 68.0568 43.0167 67.4602 43.2525 66.9545C43.4883 66.4489 43.8164 66.0582 44.2369 65.7827C44.6573 65.5071 45.1431 65.3693 45.6942 65.3693C46.1204 65.3693 46.457 65.4403 46.7042 65.5824C46.9542 65.7216 47.1445 65.8807 47.2752 66.0597C47.4087 66.2358 47.5124 66.3807 47.5863 66.4943H47.6715V63.2727H48.6772V72H47.7056V70.9943H47.5863C47.5124 71.1136 47.4073 71.2642 47.271 71.446C47.1346 71.625 46.94 71.7855 46.6871 71.9276C46.4343 72.0668 46.0977 72.1364 45.6772 72.1364ZM45.8136 71.233C46.217 71.233 46.5579 71.1278 46.8363 70.9176C47.1147 70.7045 47.3263 70.4105 47.4712 70.0355C47.6161 69.6577 47.6886 69.2216 47.6886 68.7273C47.6886 68.2386 47.6175 67.8111 47.4755 67.4446C47.3335 67.0753 47.1232 66.7884 46.8448 66.5838C46.5664 66.3764 46.2227 66.2727 45.8136 66.2727C45.3874 66.2727 45.0323 66.3821 44.7482 66.6009C44.467 66.8168 44.2553 67.1108 44.1133 67.483C43.9741 67.8523 43.9045 68.267 43.9045 68.7273C43.9045 69.1932 43.9755 69.6165 44.1175 69.9972C44.2624 70.375 44.4755 70.6761 44.7567 70.9006C45.0408 71.1222 45.3931 71.233 45.8136 71.233ZM53.4031 72.1364C52.7724 72.1364 52.2283 71.9972 51.771 71.7188C51.3164 71.4375 50.9656 71.0455 50.7184 70.5426C50.4741 70.0369 50.3519 69.4489 50.3519 68.7784C50.3519 68.108 50.4741 67.517 50.7184 67.0057C50.9656 66.4915 51.3093 66.0909 51.7496 65.804C52.1928 65.5142 52.7099 65.3693 53.3008 65.3693C53.6417 65.3693 53.9783 65.4261 54.3107 65.5398C54.6431 65.6534 54.9457 65.8381 55.2184 66.0938C55.4911 66.3466 55.7085 66.6818 55.8704 67.0994C56.0323 67.517 56.1133 68.0312 56.1133 68.642V69.0682H51.0678V68.1989H55.0906C55.0906 67.8295 55.0167 67.5 54.869 67.2102C54.7241 66.9205 54.5167 66.6918 54.2468 66.5241C53.9798 66.3565 53.6644 66.2727 53.3008 66.2727C52.9002 66.2727 52.5536 66.3722 52.261 66.571C51.9712 66.767 51.7482 67.0227 51.592 67.3381C51.4357 67.6534 51.3576 67.9915 51.3576 68.3523V68.9318C51.3576 69.4261 51.4428 69.8452 51.6133 70.1889C51.7866 70.5298 52.0266 70.7898 52.3335 70.9688C52.6403 71.1449 52.9968 71.233 53.4031 71.233C53.6673 71.233 53.9059 71.196 54.119 71.1222C54.3349 71.0455 54.521 70.9318 54.6772 70.7812C54.8335 70.6278 54.9542 70.4375 55.0394 70.2102L56.011 70.483C55.9087 70.8125 55.7369 71.1023 55.4954 71.3523C55.2539 71.5994 54.9556 71.7926 54.6005 71.9318C54.2454 72.0682 53.8462 72.1364 53.4031 72.1364ZM61.6658 74.4545C61.4954 74.4545 61.3434 74.4403 61.2099 74.4119C61.0763 74.3864 60.984 74.3608 60.9329 74.3352L61.1886 73.4489C61.4329 73.5114 61.6488 73.5341 61.8363 73.517C62.0238 73.5 62.19 73.4162 62.3349 73.2656C62.4826 73.1179 62.6175 72.8778 62.7397 72.5455L62.9272 72.0341L60.5067 65.4545H61.5977L63.4045 70.6705H63.4727L65.2795 65.4545H66.3704L63.592 72.9545C63.467 73.2926 63.3121 73.5724 63.1275 73.794C62.9428 74.0185 62.7283 74.1847 62.484 74.2926C62.2425 74.4006 61.9698 74.4545 61.6658 74.4545ZM70.1225 72.1364C69.5316 72.1364 69.0131 71.9957 68.5671 71.7145C68.1239 71.4332 67.7773 71.0398 67.5273 70.5341C67.2802 70.0284 67.1566 69.4375 67.1566 68.7614C67.1566 68.0795 67.2802 67.4844 67.5273 66.9759C67.7773 66.4673 68.1239 66.0724 68.5671 65.7912C69.0131 65.5099 69.5316 65.3693 70.1225 65.3693C70.7134 65.3693 71.2305 65.5099 71.6737 65.7912C72.1197 66.0724 72.4663 66.4673 72.7134 66.9759C72.9634 67.4844 73.0884 68.0795 73.0884 68.7614C73.0884 69.4375 72.9634 70.0284 72.7134 70.5341C72.4663 71.0398 72.1197 71.4332 71.6737 71.7145C71.2305 71.9957 70.7134 72.1364 70.1225 72.1364ZM70.1225 71.233C70.5714 71.233 70.9407 71.1179 71.2305 70.8878C71.5202 70.6577 71.7347 70.3551 71.8739 69.9801C72.0131 69.6051 72.0827 69.1989 72.0827 68.7614C72.0827 68.3239 72.0131 67.9162 71.8739 67.5384C71.7347 67.1605 71.5202 66.8551 71.2305 66.6222C70.9407 66.3892 70.5714 66.2727 70.1225 66.2727C69.6737 66.2727 69.3043 66.3892 69.0146 66.6222C68.7248 66.8551 68.5103 67.1605 68.3711 67.5384C68.2319 67.9162 68.1623 68.3239 68.1623 68.7614C68.1623 69.1989 68.2319 69.6051 68.3711 69.9801C68.5103 70.3551 68.7248 70.6577 69.0146 70.8878C69.3043 71.1179 69.6737 71.233 70.1225 71.233ZM78.7486 69.3239V65.4545H79.7543V72H78.7486V70.892H78.6804C78.527 71.2244 78.2884 71.5071 77.9645 71.7401C77.6406 71.9702 77.2315 72.0852 76.7372 72.0852C76.3281 72.0852 75.9645 71.9957 75.6463 71.8168C75.3281 71.6349 75.0781 71.3622 74.8963 70.9986C74.7145 70.6321 74.6236 70.1705 74.6236 69.6136V65.4545H75.6293V69.5455C75.6293 70.0227 75.7628 70.4034 76.0298 70.6875C76.2997 70.9716 76.6435 71.1136 77.0611 71.1136C77.3111 71.1136 77.5653 71.0497 77.8239 70.9219C78.0852 70.794 78.304 70.598 78.4801 70.3338C78.6591 70.0696 78.7486 69.733 78.7486 69.3239ZM81.5962 72V65.4545H82.5678V66.4432H82.636C82.7553 66.1193 82.9712 65.8565 83.2837 65.6548C83.5962 65.4531 83.9485 65.3523 84.3406 65.3523C84.4144 65.3523 84.5067 65.3537 84.6175 65.3565C84.7283 65.3594 84.8121 65.3636 84.869 65.3693V66.392C84.8349 66.3835 84.7567 66.3707 84.6346 66.3537C84.5153 66.3338 84.3888 66.3239 84.2553 66.3239C83.9371 66.3239 83.6531 66.3906 83.4031 66.5241C83.1559 66.6548 82.9599 66.8366 82.815 67.0696C82.6729 67.2997 82.6019 67.5625 82.6019 67.858V72H81.5962ZM89.5724 72V63.2727H90.5781V66.4943H90.6634C90.7372 66.3807 90.8395 66.2358 90.9702 66.0597C91.1037 65.8807 91.294 65.7216 91.5412 65.5824C91.7912 65.4403 92.1293 65.3693 92.5554 65.3693C93.1065 65.3693 93.5923 65.5071 94.0128 65.7827C94.4332 66.0582 94.7614 66.4489 94.9972 66.9545C95.233 67.4602 95.3509 68.0568 95.3509 68.7443C95.3509 69.4375 95.233 70.0384 94.9972 70.5469C94.7614 71.0526 94.4347 71.4446 94.017 71.723C93.5994 71.9986 93.1179 72.1364 92.5724 72.1364C92.152 72.1364 91.8153 72.0668 91.5625 71.9276C91.3097 71.7855 91.1151 71.625 90.9787 71.446C90.8423 71.2642 90.7372 71.1136 90.6634 70.9943H90.544V72H89.5724ZM90.5611 68.7273C90.5611 69.2216 90.6335 69.6577 90.7784 70.0355C90.9233 70.4105 91.1349 70.7045 91.4134 70.9176C91.6918 71.1278 92.0327 71.233 92.4361 71.233C92.8565 71.233 93.2074 71.1222 93.4886 70.9006C93.7727 70.6761 93.9858 70.375 94.1278 69.9972C94.2727 69.6165 94.3452 69.1932 94.3452 68.7273C94.3452 68.267 94.2741 67.8523 94.1321 67.483C93.9929 67.1108 93.7813 66.8168 93.4972 66.6009C93.2159 66.3821 92.8622 66.2727 92.4361 66.2727C92.027 66.2727 91.6832 66.3764 91.4048 66.5838C91.1264 66.7884 90.9162 67.0753 90.7741 67.4446C90.6321 67.8111 90.5611 68.2386 90.5611 68.7273ZM98.8153 72.1534C98.4006 72.1534 98.0241 72.0753 97.6861 71.919C97.348 71.7599 97.0795 71.5312 96.8807 71.233C96.6818 70.9318 96.5824 70.5682 96.5824 70.142C96.5824 69.767 96.6563 69.4631 96.804 69.2301C96.9517 68.9943 97.1491 68.8097 97.3963 68.6761C97.6435 68.5426 97.9162 68.4432 98.2145 68.3778C98.5156 68.3097 98.8182 68.2557 99.1222 68.2159C99.5199 68.1648 99.8423 68.1264 100.089 68.1009C100.339 68.0724 100.521 68.0256 100.635 67.9602C100.751 67.8949 100.81 67.7812 100.81 67.6193V67.5852C100.81 67.1648 100.695 66.8381 100.464 66.6051C100.237 66.3722 99.892 66.2557 99.429 66.2557C98.9489 66.2557 98.5724 66.3608 98.2997 66.571C98.027 66.7812 97.8352 67.0057 97.7244 67.2443L96.7699 66.9034C96.9403 66.5057 97.1676 66.196 97.4517 65.9744C97.7386 65.75 98.0511 65.5937 98.3892 65.5057C98.7301 65.4148 99.0653 65.3693 99.3949 65.3693C99.6051 65.3693 99.8466 65.3949 100.119 65.446C100.395 65.4943 100.661 65.5952 100.916 65.7486C101.175 65.902 101.389 66.1335 101.56 66.4432C101.73 66.7528 101.815 67.1676 101.815 67.6875V72H100.81V71.1136H100.759C100.69 71.2557 100.577 71.4077 100.418 71.5696C100.259 71.7315 100.047 71.8693 99.7827 71.983C99.5185 72.0966 99.196 72.1534 98.8153 72.1534ZM98.9688 71.25C99.3665 71.25 99.7017 71.1719 99.9744 71.0156C100.25 70.8594 100.457 70.6577 100.597 70.4105C100.739 70.1634 100.81 69.9034 100.81 69.6307V68.7102C100.767 68.7614 100.673 68.8082 100.528 68.8509C100.386 68.8906 100.222 68.9261 100.034 68.9574C99.8494 68.9858 99.669 69.0114 99.4929 69.0341C99.3196 69.054 99.179 69.071 99.071 69.0852C98.8097 69.1193 98.5653 69.1747 98.3381 69.2514C98.1136 69.3253 97.9318 69.4375 97.7926 69.5881C97.6563 69.7358 97.5881 69.9375 97.5881 70.1932C97.5881 70.5426 97.7173 70.8068 97.9759 70.9858C98.2372 71.1619 98.5682 71.25 98.9688 71.25ZM108.287 66.9205L107.384 67.1761C107.327 67.0256 107.243 66.8793 107.132 66.7372C107.025 66.5923 106.877 66.473 106.689 66.3793C106.502 66.2855 106.262 66.2386 105.969 66.2386C105.569 66.2386 105.235 66.331 104.968 66.5156C104.703 66.6974 104.571 66.929 104.571 67.2102C104.571 67.4602 104.662 67.6577 104.844 67.8026C105.026 67.9474 105.31 68.0682 105.696 68.1648L106.668 68.4034C107.253 68.5455 107.689 68.7628 107.976 69.0554C108.263 69.3452 108.407 69.7187 108.407 70.1761C108.407 70.5511 108.299 70.8864 108.083 71.1818C107.87 71.4773 107.571 71.7102 107.188 71.8807C106.804 72.0511 106.358 72.1364 105.85 72.1364C105.182 72.1364 104.63 71.9915 104.192 71.7017C103.755 71.4119 103.478 70.9886 103.361 70.4318L104.316 70.1932C104.407 70.5455 104.578 70.8097 104.831 70.9858C105.087 71.1619 105.421 71.25 105.833 71.25C106.301 71.25 106.674 71.1506 106.949 70.9517C107.228 70.75 107.367 70.5085 107.367 70.2273C107.367 70 107.287 69.8097 107.128 69.6562C106.969 69.5 106.725 69.3835 106.395 69.3068L105.304 69.0511C104.705 68.9091 104.265 68.6889 103.983 68.3906C103.705 68.0895 103.566 67.7131 103.566 67.2614C103.566 66.892 103.669 66.5653 103.877 66.2812C104.087 65.9972 104.373 65.7741 104.733 65.6122C105.097 65.4503 105.509 65.3693 105.969 65.3693C106.617 65.3693 107.125 65.5114 107.495 65.7955C107.867 66.0795 108.131 66.4545 108.287 66.9205ZM109.92 72V65.4545H110.926V72H109.92ZM110.432 64.3636C110.236 64.3636 110.067 64.2969 109.925 64.1634C109.786 64.0298 109.716 63.8693 109.716 63.6818C109.716 63.4943 109.786 63.3338 109.925 63.2003C110.067 63.0668 110.236 63 110.432 63C110.628 63 110.795 63.0668 110.935 63.2003C111.077 63.3338 111.148 63.4943 111.148 63.6818C111.148 63.8693 111.077 64.0298 110.935 64.1634C110.795 64.2969 110.628 64.3636 110.432 64.3636ZM115.427 72.1364C114.814 72.1364 114.285 71.9915 113.842 71.7017C113.399 71.4119 113.058 71.0128 112.819 70.5043C112.581 69.9957 112.461 69.4148 112.461 68.7614C112.461 68.0966 112.583 67.5099 112.828 67.0014C113.075 66.4901 113.419 66.0909 113.859 65.804C114.302 65.5142 114.819 65.3693 115.41 65.3693C115.87 65.3693 116.285 65.4545 116.654 65.625C117.024 65.7955 117.326 66.0341 117.562 66.3409C117.798 66.6477 117.944 67.0057 118.001 67.4148H116.995C116.919 67.1165 116.748 66.8523 116.484 66.6222C116.223 66.3892 115.87 66.2727 115.427 66.2727C115.035 66.2727 114.691 66.375 114.396 66.5795C114.103 66.7812 113.875 67.0668 113.71 67.4361C113.548 67.8026 113.467 68.233 113.467 68.7273C113.467 69.233 113.547 69.6733 113.706 70.0483C113.868 70.4233 114.095 70.7145 114.387 70.9219C114.683 71.1293 115.029 71.233 115.427 71.233C115.689 71.233 115.926 71.1875 116.139 71.0966C116.352 71.0057 116.532 70.875 116.68 70.7045C116.828 70.5341 116.933 70.3295 116.995 70.0909H118.001C117.944 70.4773 117.804 70.8253 117.579 71.1349C117.358 71.4418 117.064 71.6861 116.697 71.8679C116.333 72.0469 115.91 72.1364 115.427 72.1364ZM122.846 72V65.4545H123.852V72H122.846ZM123.358 64.3636C123.162 64.3636 122.993 64.2969 122.85 64.1634C122.711 64.0298 122.642 63.8693 122.642 63.6818C122.642 63.4943 122.711 63.3338 122.85 63.2003C122.993 63.0668 123.162 63 123.358 63C123.554 63 123.721 63.0668 123.86 63.2003C124.002 63.3338 124.074 63.4943 124.074 63.6818C124.074 63.8693 124.002 64.0298 123.86 64.1634C123.721 64.2969 123.554 64.3636 123.358 64.3636ZM126.7 68.0625V72H125.694V65.4545H126.665V66.4773H126.751C126.904 66.1449 127.137 65.8778 127.45 65.6761C127.762 65.4716 128.165 65.3693 128.66 65.3693C129.103 65.3693 129.491 65.4602 129.823 65.642C130.156 65.821 130.414 66.0938 130.599 66.4602C130.783 66.8239 130.876 67.2841 130.876 67.8409V72H129.87V67.9091C129.87 67.3949 129.737 66.9943 129.469 66.7074C129.202 66.4176 128.836 66.2727 128.37 66.2727C128.049 66.2727 127.762 66.3423 127.509 66.4815C127.259 66.6207 127.062 66.8239 126.917 67.0909C126.772 67.358 126.7 67.6818 126.7 68.0625ZM135.628 65.4545V66.3068H132.1V65.4545H135.628ZM133.157 72V64.5511C133.157 64.1761 133.245 63.8636 133.421 63.6136C133.597 63.3636 133.826 63.1761 134.107 63.0511C134.388 62.9261 134.685 62.8636 134.998 62.8636C135.245 62.8636 135.446 62.8835 135.603 62.9233C135.759 62.9631 135.875 63 135.952 63.0341L135.662 63.9034C135.611 63.8864 135.54 63.8651 135.449 63.8395C135.361 63.8139 135.245 63.8011 135.1 63.8011C134.767 63.8011 134.527 63.8849 134.38 64.0526C134.235 64.2202 134.162 64.4659 134.162 64.7898V72H133.157ZM139.427 72.1364C138.836 72.1364 138.318 71.9957 137.872 71.7145C137.429 71.4332 137.082 71.0398 136.832 70.5341C136.585 70.0284 136.461 69.4375 136.461 68.7614C136.461 68.0795 136.585 67.4844 136.832 66.9759C137.082 66.4673 137.429 66.0724 137.872 65.7912C138.318 65.5099 138.836 65.3693 139.427 65.3693C140.018 65.3693 140.535 65.5099 140.978 65.7912C141.424 66.0724 141.771 66.4673 142.018 66.9759C142.268 67.4844 142.393 68.0795 142.393 68.7614C142.393 69.4375 142.268 70.0284 142.018 70.5341C141.771 71.0398 141.424 71.4332 140.978 71.7145C140.535 71.9957 140.018 72.1364 139.427 72.1364ZM139.427 71.233C139.876 71.233 140.245 71.1179 140.535 70.8878C140.825 70.6577 141.039 70.3551 141.179 69.9801C141.318 69.6051 141.387 69.1989 141.387 68.7614C141.387 68.3239 141.318 67.9162 141.179 67.5384C141.039 67.1605 140.825 66.8551 140.535 66.6222C140.245 66.3892 139.876 66.2727 139.427 66.2727C138.978 66.2727 138.609 66.3892 138.319 66.6222C138.029 66.8551 137.815 67.1605 137.676 67.5384C137.537 67.9162 137.467 68.3239 137.467 68.7614C137.467 69.1989 137.537 69.6051 137.676 69.9801C137.815 70.3551 138.029 70.6577 138.319 70.8878C138.609 71.1179 138.978 71.233 139.427 71.233ZM143.928 72V65.4545H144.9V66.4432H144.968C145.087 66.1193 145.303 65.8565 145.616 65.6548C145.928 65.4531 146.281 65.3523 146.673 65.3523C146.746 65.3523 146.839 65.3537 146.95 65.3565C147.06 65.3594 147.144 65.3636 147.201 65.3693V66.392C147.167 66.3835 147.089 66.3707 146.967 66.3537C146.847 66.3338 146.721 66.3239 146.587 66.3239C146.269 66.3239 145.985 66.3906 145.735 66.5241C145.488 66.6548 145.292 66.8366 145.147 67.0696C145.005 67.2997 144.934 67.5625 144.934 67.858V72H143.928ZM148.393 72V65.4545H149.365V66.4773H149.45C149.586 66.1278 149.806 65.8565 150.11 65.6634C150.414 65.4673 150.779 65.3693 151.206 65.3693C151.637 65.3693 151.997 65.4673 152.284 65.6634C152.574 65.8565 152.799 66.1278 152.961 66.4773H153.029C153.197 66.1392 153.449 65.8707 153.784 65.6719C154.119 65.4702 154.521 65.3693 154.99 65.3693C155.575 65.3693 156.054 65.5526 156.426 65.919C156.798 66.2827 156.984 66.8494 156.984 67.6193V72H155.978V67.6193C155.978 67.1364 155.846 66.7912 155.582 66.5838C155.318 66.3764 155.007 66.2727 154.649 66.2727C154.189 66.2727 153.832 66.4119 153.579 66.6903C153.326 66.9659 153.2 67.3153 153.2 67.7386V72H152.177V67.517C152.177 67.1449 152.056 66.8452 151.815 66.6179C151.574 66.3878 151.262 66.2727 150.882 66.2727C150.62 66.2727 150.376 66.3423 150.149 66.4815C149.924 66.6207 149.743 66.8139 149.603 67.0611C149.467 67.3054 149.399 67.5881 149.399 67.9091V72H148.393ZM160.749 72.1534C160.334 72.1534 159.958 72.0753 159.62 71.919C159.282 71.7599 159.013 71.5312 158.814 71.233C158.615 70.9318 158.516 70.5682 158.516 70.142C158.516 69.767 158.59 69.4631 158.738 69.2301C158.885 68.9943 159.083 68.8097 159.33 68.6761C159.577 68.5426 159.85 68.4432 160.148 68.3778C160.449 68.3097 160.752 68.2557 161.056 68.2159C161.453 68.1648 161.776 68.1264 162.023 68.1009C162.273 68.0724 162.455 68.0256 162.569 67.9602C162.685 67.8949 162.743 67.7812 162.743 67.6193V67.5852C162.743 67.1648 162.628 66.8381 162.398 66.6051C162.171 66.3722 161.826 66.2557 161.363 66.2557C160.882 66.2557 160.506 66.3608 160.233 66.571C159.961 66.7812 159.769 67.0057 159.658 67.2443L158.703 66.9034C158.874 66.5057 159.101 66.196 159.385 65.9744C159.672 65.75 159.985 65.5937 160.323 65.5057C160.664 65.4148 160.999 65.3693 161.328 65.3693C161.539 65.3693 161.78 65.3949 162.053 65.446C162.328 65.4943 162.594 65.5952 162.85 65.7486C163.108 65.902 163.323 66.1335 163.493 66.4432C163.664 66.7528 163.749 67.1676 163.749 67.6875V72H162.743V71.1136H162.692C162.624 71.2557 162.51 71.4077 162.351 71.5696C162.192 71.7315 161.98 71.8693 161.716 71.983C161.452 72.0966 161.13 72.1534 160.749 72.1534ZM160.902 71.25C161.3 71.25 161.635 71.1719 161.908 71.0156C162.184 70.8594 162.391 70.6577 162.53 70.4105C162.672 70.1634 162.743 69.9034 162.743 69.6307V68.7102C162.701 68.7614 162.607 68.8082 162.462 68.8509C162.32 68.8906 162.155 68.9261 161.968 68.9574C161.783 68.9858 161.603 69.0114 161.426 69.0341C161.253 69.054 161.113 69.071 161.005 69.0852C160.743 69.1193 160.499 69.1747 160.272 69.2514C160.047 69.3253 159.865 69.4375 159.726 69.5881C159.59 69.7358 159.522 69.9375 159.522 70.1932C159.522 70.5426 159.651 70.8068 159.909 70.9858C160.171 71.1619 160.502 71.25 160.902 71.25ZM168.431 65.4545V66.3068H165.039V65.4545H168.431ZM166.028 63.8864H167.033V70.125C167.033 70.4091 167.075 70.6222 167.157 70.7642C167.242 70.9034 167.35 70.9972 167.481 71.0455C167.614 71.0909 167.755 71.1136 167.903 71.1136C168.013 71.1136 168.104 71.108 168.175 71.0966C168.246 71.0824 168.303 71.071 168.346 71.0625L168.55 71.9659C168.482 71.9915 168.387 72.017 168.265 72.0426C168.143 72.071 167.988 72.0852 167.8 72.0852C167.516 72.0852 167.238 72.0241 166.965 71.902C166.695 71.7798 166.471 71.5938 166.292 71.3438C166.116 71.0938 166.028 70.7784 166.028 70.3977V63.8864ZM169.944 72V65.4545H170.95V72H169.944ZM170.455 64.3636C170.259 64.3636 170.09 64.2969 169.948 64.1634C169.809 64.0298 169.739 63.8693 169.739 63.6818C169.739 63.4943 169.809 63.3338 169.948 63.2003C170.09 63.0668 170.259 63 170.455 63C170.651 63 170.819 63.0668 170.958 63.2003C171.1 63.3338 171.171 63.4943 171.171 63.6818C171.171 63.8693 171.1 64.0298 170.958 64.1634C170.819 64.2969 170.651 64.3636 170.455 64.3636ZM175.451 72.1364C174.86 72.1364 174.341 71.9957 173.895 71.7145C173.452 71.4332 173.105 71.0398 172.855 70.5341C172.608 70.0284 172.485 69.4375 172.485 68.7614C172.485 68.0795 172.608 67.4844 172.855 66.9759C173.105 66.4673 173.452 66.0724 173.895 65.7912C174.341 65.5099 174.86 65.3693 175.451 65.3693C176.042 65.3693 176.559 65.5099 177.002 65.7912C177.448 66.0724 177.794 66.4673 178.042 66.9759C178.292 67.4844 178.417 68.0795 178.417 68.7614C178.417 69.4375 178.292 70.0284 178.042 70.5341C177.794 71.0398 177.448 71.4332 177.002 71.7145C176.559 71.9957 176.042 72.1364 175.451 72.1364ZM175.451 71.233C175.9 71.233 176.269 71.1179 176.559 70.8878C176.848 70.6577 177.063 70.3551 177.202 69.9801C177.341 69.6051 177.411 69.1989 177.411 68.7614C177.411 68.3239 177.341 67.9162 177.202 67.5384C177.063 67.1605 176.848 66.8551 176.559 66.6222C176.269 66.3892 175.9 66.2727 175.451 66.2727C175.002 66.2727 174.632 66.3892 174.343 66.6222C174.053 66.8551 173.838 67.1605 173.699 67.5384C173.56 67.9162 173.49 68.3239 173.49 68.7614C173.49 69.1989 173.56 69.6051 173.699 69.9801C173.838 70.3551 174.053 70.6577 174.343 70.8878C174.632 71.1179 175.002 71.233 175.451 71.233ZM180.957 68.0625V72H179.952V65.4545H180.923V66.4773H181.009C181.162 66.1449 181.395 65.8778 181.707 65.6761C182.02 65.4716 182.423 65.3693 182.918 65.3693C183.361 65.3693 183.749 65.4602 184.081 65.642C184.413 65.821 184.672 66.0938 184.857 66.4602C185.041 66.8239 185.134 67.2841 185.134 67.8409V72H184.128V67.9091C184.128 67.3949 183.994 66.9943 183.727 66.7074C183.46 66.4176 183.094 66.2727 182.628 66.2727C182.307 66.2727 182.02 66.3423 181.767 66.4815C181.517 66.6207 181.32 66.8239 181.175 67.0909C181.03 67.358 180.957 67.6818 180.957 68.0625Z"
          fill="#344054"
        />
        <defs>
          <clipPath id="clip0_1_9130">
            <rect x="88" width="24" height="24" rx="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default SuccessFirstStep;