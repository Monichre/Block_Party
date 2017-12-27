import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

const site_routes = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/users/dashboard/:user_id',
        name: 'Dashboard'
    },
    {
        path: '/listen',
        name: 'Listen'
    }
]
const menu_items = site_routes.map((route) => (<Menu.Item className=''><Link to={`${route.path}`}>{route.name}</Link></Menu.Item>))

const FixedMenu = () => (
    <Menu fixed='top' size='large'>
        <Container>
            {menu_items}
            <Menu.Menu position='right'>
                <Menu.Item className='item'>
                    <Button as='a' primary><Link to='/login'>Login</Link></Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as='a' primary><Link to='/signup'>Sign up</Link></Button>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default class Home extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })

    render() {

        const { visible } = this.state

        return (
            <div>
                {visible ? <FixedMenu /> : null}

                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomVisible={this.hideFixedMenu}
                    once={false}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em', backgroundImage: 'url(neon.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                {menu_items}
                                <Menu.Menu position='right'>
                                    <Menu.Item className='item'>
                                        <Button as='a'><Link to='/login'>Login</Link></Button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button as='a'><Link to='/signup'>Sign up</Link></Button>
                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu>
                        </Container>

                        <Container text>
                            <Header
                                as='h1'
                                content='Block Party'
                                inverted
                                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '5em' }}
                            />
                            <Header
                                as='h2'
                                content='The first streaming platform on the Block...chain'
                                inverted
                                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                            />
                        </Container>
                    </Segment>
                </Visibility>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>Artist First</Header>
                                <p style={{ fontSize: '1.33em' }}>BlockParty is the first music platform that can honestly say it puts the Artist first.</p>
                                <Header as='h3' style={{ fontSize: '2em' }}>Listen and Earn</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    With the advent of Blockchain technology we've created a platform where every second you listen to your favorite artist you're mining on the block. Here's what's incredible: It pays you and your artist.
                                    Remember when Kings Of Leon was cool? Remember when they looked like Porny Southern Mechanics? So do we. What if every artist you got in on before they broke big paid you a share of their success?
                                    I mean you invested your ears. Now invest your mine.
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image
                                    bordered
                                    rounded
                                    size='large'
                                    src='tape.jpg'
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Button size='huge'>Check Us Out</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>"This will change the game"</Header>
                                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>"Oh Fuck"</Header>
                                <p style={{ fontSize: '1.33em' }}><Icon name='spy' /><b>Nan</b> Record Labels</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Religious Ceremonies</List.Item>
                                        <List.Item as='a'>Gazebo Plans</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Banana Pre-Order</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Favorite X-Men</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>Footer Header</Header>
                                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        )
    }
}