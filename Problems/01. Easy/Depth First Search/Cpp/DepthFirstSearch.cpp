#include <vector>
#include <string>
using namespace std;

class Node {
    public:
        string name;
        vector<Node *> children;

        Node(string name) { this -> name = name; }

        Node *addChild(string name) {
            Node *child = new Node(name);
            children.push_back(child);
            return child;
        }

        vector<string> DepthFirstSearch(vector<string> *array) { 
            array -> push_back(this->name);
            for (int i = 0; i < this->children.size(); i ++) {
                children[i]-> DepthFirstSearch(array);
            }
            return *array;
        }

};