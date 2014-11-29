// The program work if there is only one root!
familyTree();

function familyTree() {
    var BOX_WIDTH = 150,
        BOX_HEIGHT = 30,
        WINDOW_WIDTH = 1800,
        WINDOW_HEIGHT = 1600,
        SPACE_BETWEEN_NODES = 50,
        VERTICAL_SPACE_BETWEEN_BOXES = 100,
        FONT_SIZE = 16,
        familyNodes = familyMembers1(),
        familyQueue = [],
        root,
        stage = new Kinetic.Stage({
            container: 'container',
            width: WINDOW_WIDTH,
            height: WINDOW_HEIGHT
        }),
        layer = new Kinetic.Layer();

    addPropertyhasParentLevelAndCoords(familyNodes);

    root = findRoot(familyNodes);

    // set root coordinates
    root.x = WINDOW_WIDTH / 2 - 400;

    familyQueue.push(root);

    sortFamilyTree(familyQueue);
    calcFamilyNodeCoordinates(familyQueue);
    drawFamilyTree(familyQueue);

    stage.add(layer);

    function calcFamilyNodeCoordinates(familyNodes) {
        var xCoord = 300;

        for (var i = 0, l = familyNodes.length; i < l; i++) {
            var curNode = familyNodes[i];

            // In this way of calculation the separate nodes may intersect(overlap)
            for (var j = 0, len = curNode.children.length; j < len; j++) {
                var curChild = curNode.children[j];

                if (j === 0) {
                    curChild.x = curNode.x - BOX_WIDTH * (len - 1);
                } else {
                    curChild.x = curNode.children[j - 1].x + BOX_WIDTH * 2 + SPACE_BETWEEN_NODES;
                }

            }

            //// This way the family nodes do Not look good, but they will not intersect
            //if (i > 0 && curNode.level > familyNodes[i - 1].level) {
            //    xCoord = 10;
            //}

            //curNode.x = xCoord;

            //xCoord += BOX_WIDTH * 2 + SPACE_BETWEEN_NODES;

            curNode.y = curNode.level * VERTICAL_SPACE_BETWEEN_BOXES + 10;
        }
    }

    function drawFamilyTree(familyNodes) {
        var maleCornerRadius = 7,
            femaleCornerRadius = 15;

        for (var i = 0, l = familyNodes.length; i < l; i++) {
            var curNode = familyNodes[i];

            // Check if is couple(mother/father) or it is just single person
            if (typeof curNode.father !== 'undefined') {
                drawFamilyNode(curNode.father, curNode.x, curNode.y, maleCornerRadius);
                drawFamilyNode(curNode.mother, curNode.x + BOX_WIDTH + 10, curNode.y, femaleCornerRadius);
            } else {
                drawFamilyNode(curNode.name, curNode.x, curNode.y);
            }

            drawFamilyArrows(curNode);
        }
    }

    function drawFamilyNode(name, x, y, cornerRadius) {
        var rect = new Kinetic.Rect({
            x: x,
            y: y,
            width: BOX_WIDTH,
            height: BOX_HEIGHT,
            cornerRadius: cornerRadius,
            stroke: 'green'
        }),
        text = new Kinetic.Text({
            x: x,
            y: y,
            width: BOX_WIDTH,
            text: name,
            fontSize: FONT_SIZE,
            fill: 'black',
            padding: 7,
            align: 'center'
        });

        layer.add(rect);
        layer.add(text);
    }

    function drawFamilyArrows(node) {
        var children = node.children,
            arrows = [],
            group,
            circle;

        group = new Kinetic.Group({
            x: 0,
            y: 0,
        });

        // Draw green dot if have children
        if (children.length > 0) {
            circle = new Kinetic.Circle({
                x: node.x + BOX_WIDTH + 10,
                y: node.y + BOX_HEIGHT,
                radius: 10,
                fill: 'green'
            });

            group.add(circle);
        }

        for (var i = 0, l = children.length; i < l; i++) {
            var curChild = children[i],
                childX = curChild.x + BOX_WIDTH / 2,
                childY = curChild.y;

            if (curChild.childIndex === 'mother') {
                childX = childX + BOX_WIDTH + 10;
            }

            arrows[i] = new Kinetic.Line({
                points: [node.x + BOX_WIDTH + 10, node.y + BOX_HEIGHT, childX, childY],
                stroke: 'black'
            });

            group.add(arrows[i]);
        }

        layer.add(group);
    }

    // We use array in which, for each couple we push its children in the array
    // We start from the root and push all its children, then for each child push all its children and so on...
    function sortFamilyTree(familyQueue) {
        // current queue element
        for (var i = 0; i < familyQueue.length; i++) {
            var curRoot = familyQueue[i];

            // check all children of current queue element
            for (var j = 0, len = curRoot.children.length; j < len; j++) {
                var curRootChild = curRoot.children[j],
                    isNodeFound = false;

                // check all nodes for coincidence
                for (var k = 0, allNodes = familyNodes.length; k < allNodes; k++) {
                    var curNode = familyNodes[k];

                    if (curNode.mother === curRootChild || curNode.father === curRootChild) {
                        // we found the children, so its level is his parents plus 1
                        curNode.level = curRoot.level + 1;

                        // change the child string, to a reference to the real child object
                        curRoot.children[j] = curNode;
                        familyQueue.push(curNode);
                        isNodeFound = true;
                        break;
                    }
                }

                // if person has no wife/husband it is given only as string
                // we need to make it to object, in order the program to work correctly
                if (!isNodeFound) {
                    if (typeof curRootChild === 'string') {
                        curRoot.children[j] = createPerson(curRootChild, [], curRoot.level + 1);
                    }

                    familyQueue.push(curRoot.children[j]);
                }
            }
        }
    }

    // while searching for the root, chech which of the couple(father/mother) is the child
    // It is better to be in separate method, but we do the same checks while searching for the root
    function findRoot(familyNodes) {
        var root;

        for (var i = 0, l = familyNodes.length; i < l; i++) {
            var curNode = familyNodes[i],
                father = curNode.father,
                mother = curNode.mother;
            var hasParents = false;

            for (var j = 0; j < l; j++) {
                var curChildren = familyNodes[j].children;

                for (var k = 0, len = curChildren.length; k < len; k++) {
                    var curChild = curChildren[k];

                    if (mother === curChild) {
                        hasParents = true;
                        curNode.childIndex = 'mother';
                    } else if (father === curChild) {
                        hasParents = true;
                    }
                }
            }

            if (hasParents === false) {
                root = curNode;
            }
        }

        return root;
    }

    function createPerson(name, children, level) {
        return {
            name: name,
            children: children,
            level: level,
            x: 0,
            y: 0
        }
    }

    // this is never used, but if you want you can make family members of your own
    function createFamilyMember(mother, father, children) {
        return {
            mother: mother,
            father: father,
            children: children,
            level: 0,
            x: 0,
            y: 0,
            childIndex: 'father'
        }
    }

    function addPropertyhasParentLevelAndCoords(familyNodes) {
        for (var i = 0, l = familyNodes.length; i < l; i++) {
            familyNodes[i]['level'] = 0,
            familyNodes[i]['x'] = 0,
            familyNodes[i]['y'] = 0,
            familyNodes[i]['childIndex'] = 'father';
        }
    }

    //_____________________________________________________________
    function familyMembers1() {
        var familyMembers = [
    {
        mother: 'Maria Petrova',
        father: 'Georgi Petrov',
        children: ['Teodora Petrova', 'Peter Petrov']
    },
    {
        mother: 'Petra Stamatova',
        father: 'Todor Stamatov',
        children: ['Teodor Stamatov', 'Boris Opanov', 'Maria Petrova']
    },
    {
        mother: 'Boriana Stamatova',
        father: 'Teodor Stamatov',
        children: ['Martin Stamatov', 'Albena Dimitrova']
    },
    {
        mother: 'Albena Dimitrova',
        father: 'Ivan Dimitrov',
        children: ['Doncho Dimitrov', 'Ivaylo Dimitrov']
    },
    {
        mother: 'Donika Dimitrova',
        father: 'Doncho Dimitrov',
        children: ['Vladimir Dimitrov', 'Iliana Dobreva']
    },
    {
        mother: 'Juliana Petrova',
        father: 'Peter Petrov',
        children: ['Dimitar Petrov', 'Galina Opanova']
    },
    {
        mother: 'Iliana Dobreva',
        father: 'Delian Dobrev',
        children: ['Dimitar Dobrev', 'Galina Pundiova']
    },
    {
        mother: 'Galina Pundiova',
        father: 'Martin Pundiov',
        children: ['Dimitar Pundiov', 'Todor Pundiov']
    },
    {
        mother: 'Maria Pundiova',
        father: 'Dimitar Pundiov',
        children: ['Georgi Pundiov', 'Stoian Pundiov']
    },
    {
        mother: 'Dobrinka Pundiova',
        father: 'Georgi Pundiov',
        children: ['Pavel Pundiov', 'Marian Pundiov']
    },
    {
        mother: 'Elena Pundiova',
        father: 'Marian Pundiov',
        children: ['Kamen Pundiov', 'Hristina Ivancheva']
    },
    {
        mother: 'Hristina Ivancheva',
        father: 'Martin Ivanchev',
        children: ['Kamen Ivanchev', 'Evgeny Ivanchev']
    },
    {
        mother: 'Maria Ivancheva',
        father: 'Kamen Ivanchev',
        children: ['Ivo Ivanchev', 'Delian Ivanchev']
    },
    {
        mother: 'Nadejda Ivancheva',
        father: 'Ivo Ivanchev',
        children: ['Petio Ivanchev', 'Marin Ivanchev']
    },
    {
        mother: 'Natalia Ivancheva',
        father: 'Delian Ivanchev',
        children: ['Galina Hristova']
    },
    {
        mother: 'Galina Opanova',
        father: 'Boian Opanov',
        children: ['Maria Opanova', 'Patar Opanov']
    },
    {
        mother: 'Galina Hristova',
        father: 'Marin Hristov',
        children: ['Petar Hristov', 'Kamen Hristov', 'Ivan Hristov']
    },
    {
        mother: 'Simona Hristova',
        father: 'Kamen Hristov',
        children: ['Elena Hristova', 'Valeria Hristova']
    }
        ];

        return familyMembers;
    }

    //______________________________________________________________
    function familyMembers2() {
        var familyMembers = [{
            mother: 'Ganka',
            father: 'Petur',
            children: ['Stefan', 'Rumqna']
        }, {
            mother: 'Stanka',
            father: 'Rumen',
            children: ['Stamen', 'Petq', 'Stoqn']
        }, {
            mother: 'Mariq',
            father: 'Ico',
            children: ['Ivo']
        }, {
            mother: 'Pavlina',
            father: 'Genadi',
            children: ['Jivka']
        }, {
            mother: 'Diana',
            father: 'Pesho',
            children: ['Iva']
        }, {
            mother: 'Iva',
            father: 'Stefan',
            children: ['Joro']
        }, {
            mother: 'Jivka',
            father: 'Joro',
            children: ['Stefani', 'Daniela']
        }, {
            mother: 'Petq',
            father: 'Ivo',
            children: ['Doncho', 'Monika']
        }, {
            mother: 'Rumqna',
            father: 'Stamen',
            children: ['Gancho', 'Mihaela']
        }];

        return familyMembers;
    }
}