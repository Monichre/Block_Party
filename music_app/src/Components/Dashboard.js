import React, { Component } from 'react'
import Axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-js'

export default class Dashboard extends Component {
    componentDidMount() {
        
        const hash = this.props.location.hash
        let queries = hash.replace(/^\?/, '').split('&')
        const accessToken = queries[0].replace('#access_token=', '')

        this.getUserData(accessToken).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }
    getUserData(accessToken) {
        console.log(accessToken)
        return Axios({ method: 'get', url: 'https://api.spotify.com/v1/me', headers: { 'Authorization': 'Bearer ' + accessToken } })
    }
render() {
    return (
        <div>Dashboard</div>
    )
}
}