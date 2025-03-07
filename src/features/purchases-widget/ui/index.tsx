import { useState } from 'react';
import styles from './styles.module.scss';
import { ArrowToggleSvg } from '@shared/ui';

export const PurchasesWidget = () => {
    const [period, setPeriod] = useState('This month');
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const purchaseData = {
        'This month': { expense: 409, voucher: 45.78, progress: 70 },
        'Last month': { expense: 380, voucher: 42.5, progress: 40 },
    };

    return (
        <div className={styles.purchases_widget}>
            <div className={styles.widget_header}>
                <h2>Purchases</h2>
                <div
                    className={styles.dropdown}
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                    <button className={styles.dropdown_btn}>
                        {period}
                        <ArrowToggleSvg isToggleOpen={isDropdownOpen} />
                    </button>
                    {isDropdownOpen && (
                        <ul className={styles.dropdown_menu}>
                            {Object.keys(purchaseData).map((p) => (
                                <li
                                    key={p}
                                    onClick={() => {
                                        setPeriod(p);
                                        setDropdownOpen(false);
                                    }}
                                >
                                    {p}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className={styles.purchase_card}>
                <div className={`${styles.icon_circle} ${styles.purple_bg}`}>
                    <span>
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.6434 2.77494L13.612 2.84823L10.5755 9.89494H7.59141C6.87941 9.89494 6.19882 10.0415 5.58105 10.3033L7.41341 5.92659L7.45529 5.82188L7.52858 5.65435C7.54953 5.59153 7.57047 5.52871 7.60188 5.47635C8.97353 2.30376 10.5232 1.58129 13.6434 2.77494Z"
                                stroke="#936DFF"
                                stroke-width="1.57059"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M19.2867 10.1043C18.8155 9.95773 18.313 9.8949 17.8104 9.8949H10.5752L13.6117 2.8482L13.6431 2.7749C13.8001 2.82726 13.9467 2.90055 14.1038 2.96337L16.4178 3.93714C17.7057 4.47114 18.6061 5.02608 19.1506 5.6962C19.2553 5.82184 19.3391 5.93702 19.4124 6.07314C19.5066 6.21973 19.5799 6.36631 19.6218 6.52337C19.6637 6.61761 19.6951 6.71184 19.716 6.79561C19.9987 7.67514 19.8312 8.75361 19.2867 10.1043Z"
                                stroke="#936DFF"
                                stroke-width="1.57059"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M22.9213 15.0052V17.0469C22.9213 17.2563 22.9108 17.4657 22.9003 17.6752C22.7014 21.3294 20.6596 23.1722 16.7855 23.1722H8.61846C8.36716 23.1722 8.11587 23.1513 7.87505 23.1199C4.5454 22.9 2.7654 21.12 2.54552 17.7903C2.51411 17.5495 2.49316 17.2982 2.49316 17.0469V15.0052C2.49316 12.9006 3.77058 11.0892 5.59246 10.3039C6.22069 10.0421 6.89081 9.89551 7.60281 9.89551H17.8221C18.3352 9.89551 18.8378 9.9688 19.2985 10.1049C21.3821 10.7436 22.9213 12.6912 22.9213 15.0052Z"
                                stroke="#936DFF"
                                stroke-width="1.57059"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M7.41309 5.92676L5.58074 10.3035C3.75886 11.0888 2.48145 12.9002 2.48145 15.0048V11.9369C2.48145 8.96323 4.5965 6.4817 7.41309 5.92676Z"
                                stroke="#936DFF"
                                stroke-width="1.57059"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M22.9187 11.9358V15.0036C22.9187 12.7001 21.39 10.7421 19.2959 10.1139C19.8404 8.7527 19.9974 7.6847 19.7357 6.7947C19.7147 6.70046 19.6833 6.60623 19.6414 6.52246C21.589 7.52764 22.9187 9.59034 22.9187 11.9358Z"
                                stroke="#936DFF"
                                stroke-width="1.57059"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </div>
                <div className={styles.info}>
                    <p className={styles.title}>Expense</p>
                    <p className={styles.subtext}>Increased By 10%</p>
                </div>
                <p className={styles.amount}>
                    ${purchaseData[period as keyof typeof purchaseData].expense}
                </p>
                <div className={styles.progress_bar}>
                    <div
                        className={`${styles.progress} ${styles.purple}`}
                        style={{
                            width: `${purchaseData[period as keyof typeof purchaseData].progress}%`,
                        }}
                    ></div>
                </div>
            </div>

            <div className={styles.purchase_card}>
                <div className={`${styles.icon_circle} ${styles.green_bg}`}>
                    <span>
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.1873 22.2331H7.71674C4.57556 22.2331 2.48145 20.6625 2.48145 16.9978V9.6684C2.48145 6.00369 4.57556 4.43311 7.71674 4.43311H18.1873C21.3285 4.43311 23.4226 6.00369 23.4226 9.6684V16.9978C23.4226 20.6625 21.3285 22.2331 18.1873 22.2331Z"
                                stroke="#22C55E"
                                stroke-width="1.57059"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.9527 16.4738C14.6875 16.4738 16.0939 15.0674 16.0939 13.3326C16.0939 11.5978 14.6875 10.1914 12.9527 10.1914C11.2179 10.1914 9.81152 11.5978 9.81152 13.3326C9.81152 15.0674 11.2179 16.4738 12.9527 16.4738Z"
                                stroke="#22C55E"
                                stroke-width="1.57059"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.14746 10.7153V15.9506"
                                stroke="#22C55E"
                                stroke-width="1.57059"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M19.7578 10.7153V15.9506"
                                stroke="#22C55E"
                                stroke-width="1.57059"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </div>
                <div className={styles.info}>
                    <p className={styles.title}>Voucher Usage</p>
                    <p className={styles.subtext}>Increased By 5%</p>
                </div>
                <p className={styles.amount}>
                    ${purchaseData[period as keyof typeof purchaseData].voucher}
                </p>
                <div className={styles.progress_bar}>
                    <div
                        className={`${styles.progress} ${styles.yellow}`}
                        style={{
                            width: `${purchaseData[period as keyof typeof purchaseData].progress}%`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};
