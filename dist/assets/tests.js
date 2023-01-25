'use strict';

define("personal/tests/integration/components/attach/popover-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | attach/popover', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Attach::Popover />
      */
      {
        "id": "2mqila9r",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"attach/popover\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Attach::Popover>
              template block text
            </Attach::Popover>
          
      */
      {
        "id": "oV/4Q1m3",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"attach/popover\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("personal/tests/integration/components/attach/tooltip-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | attach/tooltip', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Attach::Tooltip />
      */
      {
        "id": "G2Pp9AAW",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"attach/tooltip\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Attach::Tooltip>
              template block text
            </Attach::Tooltip>
          
      */
      {
        "id": "WSLa0ZJB",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"attach/tooltip\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("personal/tests/integration/components/body-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | body', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Body />
      */
      {
        "id": "Oyaj3672",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"body\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Body>
              template block text
            </Body>
          
      */
      {
        "id": "RXuoHZGX",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"body\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("personal/tests/integration/components/floating-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | floating', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Floating />
      */
      {
        "id": "EOKYqUeK",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"floating\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Floating>
              template block text
            </Floating>
          
      */
      {
        "id": "Q6vAChch",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"floating\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("personal/tests/integration/components/footer-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Footer />
      */
      {
        "id": "6oGDmuOG",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"footer\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Footer>
              template block text
            </Footer>
          
      */
      {
        "id": "A5WFhiOM",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"footer\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("personal/tests/integration/components/header-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Header />
      */
      {
        "id": "pPFAosp3",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"header\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Header>
              template block text
            </Header>
          
      */
      {
        "id": "FuPkuOr6",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"header\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("personal/tests/integration/components/page-container-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | page-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PageContainer />
      */
      {
        "id": "9OC0jqFb",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"page-container\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <PageContainer>
              template block text
            </PageContainer>
          
      */
      {
        "id": "9CQrFa/H",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"page-container\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("personal/tests/integration/components/root-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | root', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Root />
      */
      {
        "id": "+untve0G",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"root\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Root>
              template block text
            </Root>
          
      */
      {
        "id": "93+Nzp8X",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"root\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("personal/tests/integration/components/switch-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Switch />
      */
      {
        "id": "2Vb4mXl4",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"switch\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Switch>
              template block text
            </Switch>
          
      */
      {
        "id": "N+038cyc",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"switch\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("personal/tests/integration/components/typewriter-text-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | typewriter-text', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <TypewriterText />
      */
      {
        "id": "dUKFNmCE",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"typewriter-text\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <TypewriterText>
              template block text
            </TypewriterText>
          
      */
      {
        "id": "J94rG+Lr",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"typewriter-text\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("personal/tests/integration/helpers/config-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | config', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{config this.inputValue}}
      */
      {
        "id": "Q/4VskFP",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],false,[\"config\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("personal/tests/integration/helpers/format-date-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | format-date', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{format-date this.inputValue}}
      */
      {
        "id": "yY3LtBxs",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],false,[\"format-date\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("personal/tests/integration/helpers/html-safe-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | html-safe', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{html-safe this.inputValue}}
      */
      {
        "id": "IGaztWBP",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],false,[\"html-safe\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("personal/tests/test-helper", ["personal/app", "personal/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("personal/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("personal/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("personal/tests/unit/controllers/cv-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | cv', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:cv');
      assert.ok(controller);
    });
  });
});
define("personal/tests/unit/controllers/gaming/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | gaming/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:gaming/index');
      assert.ok(controller);
    });
  });
});
define("personal/tests/unit/controllers/projects/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | projects/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:projects/index');
      assert.ok(controller);
    });
  });
});
define("personal/tests/unit/models/post-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('post', {});
      assert.ok(model);
    });
  });
});
define("personal/tests/unit/routes/art-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | art', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:art');
      assert.ok(route);
    });
  });
});
define("personal/tests/unit/routes/art/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | art/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:art/index');
      assert.ok(route);
    });
  });
});
define("personal/tests/unit/routes/cv-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | cv', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:cv');
      assert.ok(route);
    });
  });
});
define("personal/tests/unit/routes/gaming/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | gaming/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:gaming/index');
      assert.ok(route);
    });
  });
});
define("personal/tests/unit/routes/home-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define("personal/tests/unit/routes/posts/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | posts/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:posts/index');
      assert.ok(route);
    });
  });
});
define("personal/tests/unit/routes/posts/post-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | posts/post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:posts/post');
      assert.ok(route);
    });
  });
});
define("personal/tests/unit/routes/projects/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | projects/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:projects/index');
      assert.ok(route);
    });
  });
});
define("personal/tests/unit/routes/travels/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | travels/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:travels/index');
      assert.ok(route);
    });
  });
});
define("personal/tests/unit/routes/writing/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | writing/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:writing/index');
      assert.ok(route);
    });
  });
});
define("personal/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('application', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("personal/tests/unit/utils/clean-object-test", ["personal/utils/clean-object", "qunit"], function (_cleanObject, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | clean-object', function () {
    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _cleanObject.default)();
      assert.ok(result);
    });
  });
});
define("personal/tests/unit/utils/config-test", ["personal/utils/config", "qunit"], function (_config, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | config', function () {
    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _config.default)();
      assert.ok(result);
    });
  });
});
define("personal/tests/unit/utils/get-cv-data-test", ["personal/utils/get-cv-data", "qunit"], function (_getCvData, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | get-cv-data', function () {
    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _getCvData.default)();
      assert.ok(result);
    });
  });
});
define('personal/config/environment', [], function() {
  
          var exports = {
            'default': {"modulePrefix":"personal","environment":"test","rootURL":"/","locationType":"none","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false},"_APPLICATION_TEMPLATE_WRAPPER":false,"_DEFAULT_ASYNC_OBSERVERS":true,"_JQUERY_INTEGRATION":false,"_TEMPLATE_ONLY_GLIMMER_COMPONENTS":true},"APP":{"LOG_ACTIVE_GENERATION":false,"LOG_VIEW_LOOKUPS":false,"rootElement":"#ember-testing","autoboot":false,"name":"personal","version":"0.1.3+63c7df89"},"social":{"github":"https://github.com/roncodes","twitter":"https://twitter.com/wreckitron28","twitch":"https://www.twitch.tv/wreckitron28","youtube":"https://www.youtube.com/channel/UCmM_EzTI4T7qxDc-YDiKkgw","instagram":"https://www.instagram.com/wreckitron28","tiktok":"","facebook":"","linkedin":"https://www.linkedin.com/in/ronald-a-richardson/"},"fontawesome":{"defaultPrefix":"fad"},"ember-meta":{"description":"entrepreneur, software engineer, roboticist, adventurer, gamer","imgSrc":"/meta/favicon.png","siteName":"ron.dev","title":"ron.dev - ronald a. richardson - entrepreneur, software engineer, roboticist, adventurer, gamer","twitterUsername":"@WreckItRon28","url":"https://ron.dev/"},"ember-cli-markdown-resolver":{"folders":{"posts":"app/posts"}},"exportApplicationGlobal":true,"currentRevision":"63c7df894b","longRevision":"63c7df894b8d4c503943b252aaef3bca9ecd5e3c","tag":null,"branch":"main"}
          };
          Object.defineProperty(exports, '__esModule', {value: true});
          return exports;
        
});

require('personal/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
