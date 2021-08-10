import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../action/postAction ';


 class home extends Component {
    componentWillMount() {
        this.props.fetchPosts();
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost);
        }
      }
    
      render() {
        const postItems = this.props.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ));
    
        
            return (
                <div>
                    <h1>vehicle bid</h1>
                    <p>Our Business Solutions offer a range of loans and financing options, sustained by 
                        guidance from a team of business professionals who concentrate on helping improve cash flow,
                         providing credit solutions,and on managing payroll. go ahead and discover solutions
                          that'll help you business run effectively.</p>
                          {/* {postItems} */}
                          <div className ="row"> 
                           <div className ="col-1-of-3 card  "  >
                               <div className="card-image">
                                <img  src=""  alt="" />
                               </div>
        
                               <div card-title>
                                <h3> this is my car</h3>
                               </div>
                               <div card-detail>
                                <h3>Price</h3>
                                <h3>mileage</h3>
                                <h3>Location</h3>
                               </div>
                               <a href="detail" class=" btn-text"> More Details &rarr;</a>
                               </div> 
                               <div className ="col-1-of-3 card ">
                               <div className="card-image">
                                <img  src=""  alt="" />
                               </div>
        
                               <div card-title>
                                <h3> this is my car</h3>
                               </div>
                               <div card-detail>
                                <h3>Price</h3>
                                <h3>mileage</h3>
                                <h3>Location</h3>
                               </div>
                               <a href="detail" class=" btn-text"> More Details &rarr;</a>
                               </div> 
                               <div className ="col-1-of-3  card  ">
                               <div className="card-image">
                                <img  src=""  alt="" />
                               </div>
        
                               <div card-title>
                                <h3> this is my car</h3>
                               </div>
                               <div card-detail>
                                <h3>Price</h3>
                                <h3>mileage</h3>
                                <h3>Location</h3>
                               </div>
                               <a href="detail" class=" btn-text"> More Details &rarr;</a>
                               </div> 
                          </div>
                </div>
                
               
            )
        
    }
}
home.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
  };
  
  const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
  });
export default connect(mapStateToProps, { fetchPosts })(home);

