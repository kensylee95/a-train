import React from "react"
import styles from "./ComparePlans.module.scss"

const ComparePlans = () => {
    const plans = [
        { key: 'basic', label: 'Basic', price: '$0', cta: 'Choose Basic' },
        { key: 'pro', label: 'Pro', price: '$15', cta: 'Start with Plus' },
    ] as const;

    const rows: { label: string; values: (string | boolean)[] }[] = [
        { label: 'Swap Fees', values: ['0.5%', '0.3%'] },
        { label: 'FX Conversions', values: [true, true] },
        { label: 'Transfers', values: ['1%', '0.5%'] },
    ];
    return (
        <section className={styles.container}>
          <div className={styles.pricingHeading}>
                <h1>Compare plans</h1>
                <br />
                <div className={styles.tableScroll}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.stickyHead}></th>
                                {plans.map((plan) => (
                                    <th key={plan.key}>
                                        <div className={styles.planHeader}>{plan.label}</div>
                                        <br />
                                        <div className={styles.planPrice}>{plan.price}</div>
                                        <br />
                                        <button className={`${styles.cta} ${plan.key === 'pro' ? styles.ctaPrimary : styles.ctaGhost}`}>{plan.cta}</button>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.label}>
                                    <td className={`${styles.rowLabel} ${styles.stickyCol}`}>{row.label}</td>
                                    {row.values.map((value, idx) => (
                                        <td key={idx} className={styles.cell}>
                                            {typeof value === 'boolean' ? (
                                                value ? <img className={styles.check} src="/check.svg" alt="check" /> : null
                                            ) : (
                                                <span>{value}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ComparePlans;