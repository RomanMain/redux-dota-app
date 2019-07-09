import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { heroFetchData } from '../actions/heroesAction'

class HeroDetail extends React.Component {
    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        const { base_health, base_mana, attack_range, base_str, base_int, agi_gain, move_speed } = this.props.location.state

        if (this.props.isLoading) {
            return (
                <div className="d-flex justify-content-center align-items-center">
                    <p className="bg-primary p-3">Loading…</p>
                </div>
            )
        }
        return (
            <div className="container pb-5">
                <NavLink to='/' className="btn btn-primary">На главную</NavLink>
                {this.props.hero.map((item, index) => (
                    <div key={index} className="row mt-3">
                        <div className="col-6 hero">
                            <h2 className="hero-name text-white">{item.localized_name}</h2>
                            <div className="hero-detail">
                                <ul className="list-group list-group-flush mt-3">
                                    <li className="list-group-item">Base health:</li>
                                    <li className="list-group-item">Base health regen:</li>
                                    <li className="list-group-item">Base mana regen:</li>
                                    <li className="list-group-item">Base attack:</li>
                                    <li className="list-group-item">Base str:</li>
                                    <li className="list-group-item">Base int:</li>
                                    <li className="list-group-item">Base agi:</li>
                                    <li className="list-group-item">Move speed:</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 hero">
                            <h2 className="hero-name text-white">{item.attack_type}</h2>
                            <div className="hero-detail">
                                <ul className="list-group list-group-flush mt-3">
                                    <li className="list-group-item">{base_health}</li>
                                    <li className="list-group-item">{base_mana}</li>
                                    <li className="list-group-item">{base_health}</li>
                                    <li className="list-group-item">{attack_range}</li>
                                    <li className="list-group-item">{base_str}</li>
                                    <li className="list-group-item">{base_int}</li>
                                    <li className="list-group-item">{agi_gain}</li>
                                    <li className="list-group-item">{move_speed}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        hero: state.heroes.heroes.filter(item => item.id === parseInt(ownProps.match.params.id, 10)),
        isLoading: state.heroes.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(heroFetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);