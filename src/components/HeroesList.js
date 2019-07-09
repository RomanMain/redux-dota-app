import React from 'react'
import { Link } from 'react-router-dom'

const HeroesList = ({ items, title, name }) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div className="hero-title text-center mt-3 mb-3">{title}</div>
            <div className='hero_list'>
                {items.map(item => (
                    <Link key={item.id}
                        to={{
                            pathname: `/${item.id}`,
                            state: item
                        }}
                        className={item.localized_name === name ? `'hero_item' border border-error` : 'hero_item'}
                    >
                        <img src={`https://api.opendota.com${item.icon}`} alt={item.localized_name} className="img-responsive" />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HeroesList