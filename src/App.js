import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Post from './components/Post';
import Project from './components/Project';
import SinglePost from './components/SinglePost';

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact component={Home} path="/" />
				<Route exact component={About} path="/about" />
				<Route exact component={SinglePost} path="/post/:slug" />
				<Route exact component={Post} path="/post" />
				<Route exact component={Project} path="/project" />
			</Switch>
		</Router>
	);
}

export default App;
