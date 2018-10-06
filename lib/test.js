'use strict';

var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

var graphqlHTTP = require('express-graphql'); // let's import the schema file we just created


var GraphQLSchema = require("./graphql/schema");

var app = express();
app.use(cors());
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use('/', graphqlHTTP({
  graphiql: true,
  schema: GraphQLSchema
}));
module.exports = app;
"use strict";

var fakeDb = {
  users: [],
  comments: []
};
module.exports = fakeDb;
'use strict';

var _Comment = _interopRequireDefault(require("../types/Comment"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentResolver = require("../../resolvers/Comment");

module.exports = {
  index: function index() {
    return {
      type: _Comment.default,
      description: 'This will create a new comment.',
      args: {
        userId: {
          type: _graphql.GraphQLID,
          description: 'Please enter the user id'
        },
        message: {
          type: _graphql.GraphQLString,
          description: 'Please enter the message'
        }
      },
      resolve: function resolve(parent, args, context, info) {
        return CommentResolver.push(args);
      }
    };
  }
};
'use strict'; // import the User type we created

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../../types/User"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import the User resolver to the specific country
var UserResolver = require("../../../resolvers/".concat(process.env.TARGET, "/User"));

var _default = {
  type: _User.default,
  description: 'This will create a new user.',
  args: {
    name: {
      type: _graphql.GraphQLString,
      description: 'Please enter the user name'
    }
  },
  resolve: function resolve(parent, args, context, info) {
    return UserResolver.push(args);
  }
};
exports.default = _default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

// import the User resolver to the specific country
var UserResolver = require("../../../resolvers/".concat(process.env.TARGET, "/User"));

var _default = {
  type: _graphql.GraphQLBoolean,
  description: 'This will delete a user.',
  args: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
      description: 'Please enter the user id'
    }
  },
  resolve: function resolve(parent, args, context, info) {
    return UserResolver.delete(args);
  }
};
exports.default = _default;
'use strict'; // import the User type we created

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../../types/User"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import the User resolver to the specific country
var UserResolver = require("../../../resolvers/".concat(process.env.TARGET, "/User"));

var _default = {
  type: _User.default,
  description: 'This will update a user.',
  args: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
      description: 'Please enter the user id'
    },
    name: {
      type: _graphql.GraphQLString,
      description: 'Please enter the user name'
    }
  },
  resolve: function resolve(parent, args, context, info) {
    return UserResolver.update(args);
  }
};
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreateUser = _interopRequireDefault(require("./CreateUser"));

var _UpdateUser = _interopRequireDefault(require("./UpdateUser"));

var _DeleteUser = _interopRequireDefault(require("./DeleteUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  CreateUser: _CreateUser.default,
  UpdateUser: _UpdateUser.default,
  DeleteUser: _DeleteUser.default
};
exports.default = _default;
'use strict';

var _Comment = _interopRequireDefault(require("../types/Comment"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import the Post type we created
// import the Post resolver we created
var CommentResolver = require("../../resolvers/Comment");

module.exports = {
  index: function index() {
    return {
      type: new _graphql.GraphQLList(_Comment.default),
      description: 'This will return all the comments.',
      args: {
        userId: {
          type: _graphql.GraphQLID,
          description: 'Please enter a userId'
        }
      },
      resolve: function resolve(parent, args, context, info) {
        return CommentResolver.index({
          userId: parent.id
        });
      }
    };
  }
};
'use strict';

var GraphQL = require('graphql');

var GraphQLList = GraphQL.GraphQLList,
    GraphQLString = GraphQL.GraphQLString; // import the Post type we created

var PostType = require("../types/Post"); // import the Post resolver we created


var PostResolver = require("../../resolvers/Post");

module.exports = {
  index: function index() {
    return {
      type: new GraphQLList(PostType),
      description: 'This will return all the posts we find in the given subreddit.',
      args: {
        subreddit: {
          type: GraphQLString,
          description: 'Please enter subreddit name'
        }
      },
      resolve: function resolve(parent, args, context, info) {
        return PostResolver.index(args);
      }
    };
  }
};
'use strict';

var GraphQL = require('graphql');

var GraphQLList = GraphQL.GraphQLList,
    GraphQLString = GraphQL.GraphQLString; // import the Post type we created

var ProductType = require("../types/Product"); // import the Post resolver we created


var ProductResolver = require("../../resolvers/".concat(process.env.TARGET, "/Product"));

module.exports = {
  index: function index() {
    return {
      type: new GraphQLList(ProductType),
      description: 'This will return all the posts we find in the given subreddit.',
      args: {
        subreddit: {
          type: GraphQLString,
          description: 'Please enter subreddit name'
        }
      },
      resolve: function resolve(parent, args, context, info) {
        return ProductResolver.index(args);
      }
    };
  }
};
'use strict';

var _User = _interopRequireDefault(require("../types/User"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import the Post type we created
// import the Post resolver we created
var UserResolver = require("../../resolvers/".concat(process.env.TARGET, "/User"));

module.exports = {
  index: function index() {
    return {
      type: new _graphql.GraphQLList(_User.default),
      description: 'This will return all the users.',
      resolve: function resolve(parent, args, context, info) {
        return UserResolver.index(args);
      }
    };
  }
};
'use strict';

var _User = _interopRequireDefault(require("./mutations/User"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import the user query file we created
var PostQuery = require("./queries/Post");

var ProductQuery = require("./queries/Product");

var UserQuery = require("./queries/User");

var CommentQuery = require("./queries/Comment");

var CreateCommentMutation = require("./mutations/CreateComment"); // lets define our root query


var RootQuery = new _graphql.GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    posts: PostQuery.index(),
    comments: CommentQuery.index(),
    users: UserQuery.index(),
    products: ProductQuery.index()
  }
});
var RootMutation = new _graphql.GraphQLObjectType({
  name: 'RootMutationType',
  description: 'This is the default root mutation provided by our application',
  fields: _objectSpread({}, _User.default, {
    createComment: CreateCommentMutation.index()
  })
}); // export the schema

module.exports = new _graphql.GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("./User"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserResolver = require("../../resolvers/".concat(process.env.TARGET, "/User"));

var CommentType = new _graphql.GraphQLObjectType({
  name: 'Comment',
  description: 'Comment Type',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLID,
        description: 'ID of the comment'
      },
      user: {
        type: _User.default,
        description: 'Owner',
        resolve: function resolve(parent, args, context, info) {
          return UserResolver.index({
            id: parent.userId
          });
        }
      },
      message: {
        type: _graphql.GraphQLString,
        description: 'Comment message'
      }
    };
  }
});
var _default = CommentType;
exports.default = _default;
'use strict';

var GraphQL = require('graphql');

var GraphQLObjectType = GraphQL.GraphQLObjectType,
    GraphQLString = GraphQL.GraphQLString,
    GraphQLID = GraphQL.GraphQLID,
    GraphQLInt = GraphQL.GraphQLInt;
var PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post Type, For all the posts present in Reddit.',
  fields: {
    id: {
      type: GraphQLID,
      description: 'ID of the post'
    },
    title: {
      type: GraphQLString,
      description: 'Title of the post'
    },
    url: {
      type: GraphQLString,
      description: 'URL of the post'
    },
    author: {
      type: GraphQLString,
      description: 'Name of the Author who created this post'
    },
    ups: {
      type: GraphQLInt,
      description: 'Total number of Upvotes received for this post'
    },
    downs: {
      type: GraphQLInt,
      description: 'Total number of Downvotes received for this post'
    },
    content: {
      type: GraphQLString,
      description: 'Markdown content of the post'
    }
  }
});
module.exports = PostType;
'use strict';

var GraphQL = require('graphql');

var Productimage = require("./ProductImage");

var GraphQLObjectType = GraphQL.GraphQLObjectType,
    GraphQLString = GraphQL.GraphQLString,
    GraphQLID = GraphQL.GraphQLID,
    GraphQLInt = GraphQL.GraphQLInt,
    GraphQLList = GraphQL.GraphQLList;
var ProductType = new GraphQLObjectType({
  name: 'Product',
  description: 'Post Type, For all the posts present in Reddit.',
  fields: {
    id: {
      type: GraphQLID,
      description: 'ID of the post'
    },
    name: {
      type: GraphQLString,
      description: 'Name of the product'
    },
    description: {
      type: GraphQLString,
      description: 'Description of the product'
    },
    price: {
      type: GraphQLInt,
      description: 'Name of the Author who created this post'
    },
    images: {
      type: new GraphQLList(Productimage),
      description: 'Total number of Upvotes received for this post'
    }
  }
});
module.exports = ProductType;
'use strict';

var GraphQL = require('graphql');

var GraphQLObjectType = GraphQL.GraphQLObjectType,
    GraphQLString = GraphQL.GraphQLString,
    GraphQLID = GraphQL.GraphQLID;
var CommentType = new GraphQLObjectType({
  name: 'ProductImage',
  description: 'Comment Type',
  fields: {
    id: {
      type: GraphQLID,
      description: 'ID of the comment'
    },
    small: {
      type: GraphQLString,
      description: 'Small product image'
    },
    medium: {
      type: GraphQLString,
      description: 'Medium product image'
    },
    big: {
      type: GraphQLString,
      description: 'Big product image'
    }
  }
});
module.exports = CommentType;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Comment = _interopRequireDefault(require("./Comment"));

var _graphql = require("graphql");

var _Comment2 = _interopRequireDefault(require("../../resolvers/Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserType = new _graphql.GraphQLObjectType({
  name: 'User',
  description: 'User Type, For all the users present in fakeDB.',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLID,
        description: 'ID of the user'
      },
      name: {
        type: _graphql.GraphQLString,
        description: 'Name of the user'
      },
      comments: {
        type: new _graphql.GraphQLList(_Comment.default),
        description: 'User comments',
        resolve: function resolve(parent, args, context, info) {
          return _Comment2.default.index({
            userId: parent.id
          });
        }
      }
    };
  }
});
var _default = UserType;
exports.default = _default;
"use strict";

var data = {
  products: [{
    id: 1,
    name: 'IQOS Purple',
    images: [{
      small: 'http://iqos.jp/small.png',
      medium: 'http://iqos.jp/medium.png',
      big: 'http://iqos.jp/big.png'
    }, {
      small: 'http://iqos.jp/small2.png',
      medium: 'http://iqos.jp/medium2.png',
      big: 'http://iqos.jp/big2.png'
    }],
    price: 100,
    currency: 'Yen'
  }]
};
module.exports = data;
'use strict';

var fakeDB = require("../fakedb");

var CommentsController = {
  index: function index(args) {
    var comments = fakeDB.comments;

    if (args.userId) {
      return fakeDB.comments.filter(function (comment) {
        return comment.userId === args.userId;
      });
    }

    return comments;
  },
  push: function push(args) {
    var newComment = {
      id: Date.now(),
      userId: args.userId,
      message: args.message
    };
    fakeDB.comments.push(newComment);
    return newComment;
  }
};
module.exports = CommentsController;
'use strict';

var axios = require('axios');

var PostsController = {
  index: function index(args) {
    var URL = "https://www.reddit.com/r/".concat(args.subreddit || 'javascript', ".json");
    return axios.get(URL).then(function (response) {
      var posts = response.data.data.children;
      return posts.map(function (post) {
        post.data.content = post.data.selftext_html;
        return post.data;
      });
    }).catch(function (error) {
      return {
        error: error
      };
    });
  }
};
module.exports = PostsController;
'use strict';

var japan = require("../../../japan");

var ProductController = {
  index: function index(args) {
    return japan.products.map(function (product) {
      return {
        id: product.id,
        name: product.name,
        images: product.images.map(function (image) {
          return {
            small: image.small,
            medium: image.medium,
            big: image.big
          };
        }),
        description: '',
        price: product.price,
        currency: product.currency
      };
    });
  }
};
module.exports = ProductController;
'use strict';

var japan = require("../../japan");

var ProductController = {
  index: function index(args) {
    return japan.products.map(function (product) {
      return {
        id: product.id,
        name: product.productName,
        images: product.images.map(function (image) {
          return {
            small: image,
            medium: image,
            big: image
          };
        }),
        description: product.description || '',
        price: product.price,
        currency: product.currency
      };
    });
  }
};
module.exports = ProductController;
'use strict';

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fakeDB = require("../../fakedb");

var UsersController = {
  index: function index(_ref) {
    var id = _ref.id;
    var users = fakeDB.users;

    if (id) {
      return users.filter(function (user) {
        return user.id === id;
      })[0];
    }

    return users;
  },
  push: function push(args) {
    var newUser = {
      id: Date.now() + '',
      name: args.name
    };
    fakeDB.users.push(newUser);
    return newUser;
  },
  update: function update(_ref2) {
    var id = _ref2.id,
        name = _ref2.name;
    var foundUser = {};
    fakeDB.users = fakeDB.users.map(function (user) {
      if (user.id === id) {
        user.name = name;
        foundUser = _objectSpread({}, user);
      }

      return user;
    });
    return foundUser;
  },
  delete: function _delete(_ref3) {
    var id = _ref3.id;
    var deleted = false;
    fakeDB.users = fakeDB.users.filter(function (user) {
      if (user.id !== id) {
        return true;
      }

      deleted = true;
      return false;
    });
    return deleted;
  }
};
module.exports = UsersController;
"use strict";

var data = {
  products: [{
    id: 1,
    productName: 'IQOS Purple',
    images: ['http://iqos.jp/big.png', 'http://iqos.jp/big2.png'],
    price: 100,
    currency: '$'
  }, {
    id: 1,
    productName: 'IQOS Purple',
    images: ['http://iqos.jp/big.png', 'http://iqos.jp/big2.png'],
    price: 100,
    currency: '$',
    description: 'test description'
  }]
};
module.exports = data;
