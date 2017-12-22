import React, { Component } from 'react'
import Axios from 'axios'
import { Grid, Button, Card, Icon, Image } from 'semantic-ui-react'




export default class Login extends Component {
    constructor(props) {
        super(props)

        
    }
    componentDidMount() {
        
    }
    login(callback) {
        const CLIENT_ID = 'e86c9d8c7e084cf494d82947a0ea1252'
        const CLIENT_SECRET = '860af304d691469b9f73ed5cf7201fcc'
        const REDIRECT_URI = 'http://localhost:3000/callback'
        const scopes = [
            'user-read-currently-playing',
            'ugc-image-upload',
            'streaming',
            'playlist-read-private',
            'user-library-read',
            'user-read-private',
            'user-top-read'
        ]
        
        const getLoginURL = (the_scopes) => {
            return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
              '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
              '&scope=' + encodeURIComponent(the_scopes.join(' ')) +
              '&response_type=token';
        }
        const url = getLoginURL(scopes)
        console.log(url)
        let width = 450
        let height = 730
        let left = (window.width / 2) - (width / 2)
        let top = (window.height / 2) - (height / 2)
     
        const _win = window.open(url,
                            'Spotify',
                            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
                           );
        
    }

  
    handleCustomSignUp(e) {
        e.preventDefault()
    }
    handleSpotifyLogin(e){
        e.preventDefault()

        this.login()

    
           


    }
    render() {
        return (
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Card.Group>
                            <Card>
                                <Image src='spotify.jpeg' />
                                <Card.Content>
                                    <Card.Header>
                                        Sign In With Spotify
                                </Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic color='green' onClick={this.handleSpotifyLogin.bind(this)}>Sign In</Button>
                                        <Button basic color='red'>Already Registered?</Button>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Image src='https://images.unsplash.com/photo-1502179752592-b1d28abbb841?auto=format&fit=crop&w=1600&q=80' />
                                <Card.Content>
                                    <Card.Header>
                                        Join the Block Party Stereo Exchange
                                </Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic color='green' onClick={this.handleCustomSignUp.bind(this)}>Sign Up</Button>
                                        <Button basic color='red'>Already Registered?</Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Card.Group>

                    </Grid.Column>
                    <Grid.Column width={3}>

                    </Grid.Column>
                </Grid.Row>


            </Grid>
        )
    }
}