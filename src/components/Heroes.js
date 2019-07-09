import React, { Component } from 'react'
import HeroesList from './HeroesList'
import { connect } from 'react-redux'
import { heroesFetchData, changedSearchValue } from '../actions/heroesAction'

class Heroes extends Component {
    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className="d-flex justify-content-center align-items-center">
                    <p className="bg-primary p-3">Loading…</p>
                </div>
            )
        }
        return (
            <div className="container pt-4 pb-5 text-white">
                <div className="search">
                    <form>
                        <input type="text" onChange={(e) => this.props.onChange(e.target.value)} className="form-control" placeholder="Начните вводить название героя" />
                    </form>
                </div>
                <div className="row mt-4">
                    <HeroesList items={this.props.strength}
                                title="STRENGTH"
                                name={this.props.searchValue}
                    />
                    <HeroesList items={this.props.intelligence}
                                title="INTELLIGENCE"
                                name={this.props.searchValue}
                    />
                    <HeroesList items={this.props.agility}
                                title="AGILITY"
                                name={this.props.searchValue}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        heroes: state.heroes.heroes,
        strength: state.heroes.heroes.filter(item => item.primary_attr === 'str'),
        intelligence: state.heroes.heroes.filter(item => item.primary_attr === 'int'),
        agility: state.heroes.heroes.filter(item => item.primary_attr === 'agi'),
        searchValue: state.heroes.searchValue,
        isLoading: state.heroes.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(heroesFetchData()),
        onChange: (value) => { dispatch(changedSearchValue(value)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);