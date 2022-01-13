/*
A ternary search tree is a trie-like data structure where each node may have up to three children. 
Here is an example which represents the words code, cob, be, ax, war, and we.

       c
    /  |  \
   b   o   w
 / |   |   |
a  e   d   a
|    / |   | \ 
x   b  e   r  e  
The tree is structured according to the following rules:

left child nodes link to words lexicographically earlier than the parent prefix
right child nodes link to words lexicographically later than the parent prefix
middle child nodes continue the current word
For instance, since code is the first word inserted in the tree, and cob lexicographically precedes cod, 
cob is represented as a left child extending from cod.

Implement insertion and search functions for a ternary search tree.
*/

class Main {
    public static void main(String[] args) {
        Trie trie = new Trie();
        for (String str : args) {
            trie.insert(str);
            System.out.println("inserted " + str);
        }
    }
}

class Trie {
    Node root = null;

    void insert(String word) {
        if (root == null) {
            this.root = new Node();
            this.root.parent = null;
            this.root.data = word.charAt(0);
        }
        insert_recursive(this.root, word);
    }

    private void insert_recursive(Node n, String word) {
        if (word.equals("")) return;
        char c = word.charAt(0);
        if (n.data == '\0') {
            n.data = c;
        }
        if (c < n.data) {
            if (n.l == null) {
                n.l = new Node();
            }
            insert_recursive(n.l, word);
        } else if (c > n.data) {
            if (n.r == null) {
                n.r = new Node();
            }
            insert_recursive(n.r, word);
        } else {
            if (word.substring(1).equals("")) return;
            if (n.m == null) {
                n.m = new Node();
            }
            insert_recursive(n.m, word.substring(1));
        }
    }

    boolean search(String s) {
        // implement
        return false;
    }
}

class Node {
    Node parent, l, m, r;
    char data;
}
