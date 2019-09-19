import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Staff from './main/Staff'
import Home from './main/Home';
import SearchStaff from './main/SearchStaff'
import Customer from './main/Customer'
import Package from './main/Package'
import Book from './main/book'
import Edit from './main/Edit'
import Admin from './main/Admin'
import WayTrain from './main/WaysTrain'
import Graph from './main/Graph'
import SelectCharacter from './main/SelectCharacter'
const Homeing = createStackNavigator({
    Home : {
        screen : Home,
        navigationOptions : {
            header : null
        }
    },
    Admin :{
        screen : Admin,
        navigationOptions : {
            headerTintColor : 'red',
            title : 'Admin'
        }
    },
    WayTrain :{
        screen : WayTrain,
        navigationOptions : {
            headerTintColor : 'red',
            title : 'Electric train Ways WU'
        }
    },
    Graph : {
        screen : Graph,
        navigationOptions : {
            headerTintColor : 'red',
            title : 'Graph'
        }
    },
    SelectCharacter : {
        screen :SelectCharacter,
        navigationOptions : {
            headerTintColor : 'red',
            title : 'Select Character'
        }
    }
})
const booking = createStackNavigator({
    Book : {
        screen : Book,
        navigationOptions : {
            header : null
        }
    },
    Edit : {
        screen : Edit,
        navigationOptions : {
            headerTintColor : 'red',
            title : 'Edit'
        }
    },
})
const Homes = createBottomTabNavigator({
    Home : {
        screen : Homeing
    },
    Staff : {
        screen : Staff
    },
    SearchStaff :{
        screen : SearchStaff
    },
    Customer : {
        screen : Customer
    },
    Package : {
        screen : Package
    },
    Book : {
        screen : booking
    }
});
const app = createAppContainer(Homes);
export default app;