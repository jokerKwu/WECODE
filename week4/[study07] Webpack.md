# Webpack 

### Webpack 이란?

프로젝트의 구조를 분석하고 자바스크립트 모듈을 비롯한 관련 리소스들을 찾은 다음 이를 브라우저에서 이용할 수 있는 번들로 묶고 패킹하는 모듈 번들러다.<br>

-----------------------------------------
#### 모듈화
기능 별로 코드를 분리하여 코드의 재사용성을 높이고 유지보수를 편리하게 하는 작업을 모듈화라고 한다.<br>

### Webpack 사용하는 이유
코드의 재사용성, 쉬운 유지보수 등을 위해서는 모듈 별로 코드를 관리하는 것이 중요하다.<br>
코드의 양이 방대해지면 이의 중요성이 더더욱 커진다.<br>
하지만 Javascript는 이를 지원하는 모듈 시스템이 없다.<br>
Webpack은 한마디로 자바스크립트 어플리케이션을 위한 정적 모듈 번들러라고 설명할 수 있다.<br>
즉, 여러 의존 관계에 있는 모듈들 하나의 js파일로 번들링하는 역할을 수행한다.<br>
플러그인을 끼우면 번들링 뿐만 아니라 훨씬 확장적인 기능을 사용할 수도 있다.<br>

#### 모듈 번들러
Webpack에 대해 찾아보면 "모듈 번들러"라는 단어가 계속적으로 나오는데 번들링이란 여러 개의 파일을 하나의 파일로 만들어주는 작업을 의미한다.<br>

#### Webpack 장점
Webpack을 사용함으로써 우리가 얻을 수 있는 이점은 다음과 같다.<br>
 - 의존 모듈이 하나의 파일로 번들링되기 때문에 별도의 모듈 로더가 필요없다.
 - html 파일에서 script 태그로 다수의 자바스크립트 파일을 로드해야 하는 번거로움을 줄일 수 있다.
 - 모듈 시스템 관리
 - 로더 사용
 - 빠른 컴파일

## Webpack의 핵심 개념 6가지
#### 1. Entry
내부적인 의존성 그래프의 빌드를 시작히 위해 webpack이 어디를 향해야 하는지 설정한다.<br>
<code><pre>
module.exports = {
 entry: './path/to/my/entry/file.js'
 };
</pre></code>

#### 2. Output
Webpack이 만들어낸 번들을 저장할 위치, 이름을 설정한다.<br>
아래의 예시대로 한다면 ./dist 라는 경로에 번들링된 모듈이 my-first-webpack.bundle.js 이라는 이름으로 저장된다.<br>

<code><pre>
const path = require('path');

module.exports = {
	entry: './path/to/my/entry/file.js',
	output: {
		path: path.resolve(_dirname, 'dist'),
		filename: 'my-first-webpack.bundle.js'
		}
	};

</pre></code>


#### 3. Loaders
Webpack이 이해할 수 있는 건 자바스크립트, Json 파일 뿐이다.<br>
따라서 loader 설정을 통해 (1) 다른 타입의 파일을 처리하고 (2) 어플리케이션이 사용할 수 있는 형태로 변환하고 (3) 의존성 그래프에 추가하는 역할을 수행시킬 수 있다.<br>

<code><pre>
const path = require('path');
module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
</pre></code>

#### 4. Plugins
플러그인 기능을 통해서 기능을 확장시킬 수 있다.<br>
<code><pre>
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
</pre></code>

#### 5. Mode
development, production, none으로 설정함으로써 webpack을 각 환경에 맞게 일치시킬 수 있다.<br>
development: 개발용<br>
production: 배포용. 이 경우에는 알아서 최적화가 적용됨<br>
<code><pre>
module.exports = {
  mode: 'production'
};
</pre></code>

#### 6. Browser Compatibility
크롬이나 파이어폭스 등 요즘 웬만한 브라우저들은 사용자의 업데이트와 관계없이 자바스크립트의 버전을 지원한다. 하지만 IE는 그렇지 않다.<br>
Webpack은 ES5-compliant한 브라우저에서도 ES6 스펙의 자바스크립트 코드가 호환 가능하도록 도와준다.<br>
