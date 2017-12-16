from flask import Flask, jsonify, request
from uuid import uuid4
from blockchain import Blockchain


# Instantiate the server --> will move this out of this file at some point
app = Flask(__name__)

# Create a globally unique address or this node
node_identifier = str(uuid4()).replace('-', '')

# Instantiate the Blockchain
blockchain = Blockchain()

@app.route('/mine', methods=['GET'])
def mine():

    last_block = blockchain.last_block
    last_proof = last_block['proof']
    proof = blockchain.proof_of_work(last_proof)

    # Receive a reward for finding this proof
    blockchain.new_transaction(
        sender="0",
        recipient=node_identifier,
        amount=1
    )

    # Forge new block by adding it to the chain
    previous_hash = block.hash(last_block)
    block = blockchain.new_block(proof, previous_hash)

    response = {
        'message': 'New Block Forged',
        'index': block['index'],
        'transactions': block['transactions'],
        'proof': block['proof'],
        'previous_hash': block['previous_hash']
    }

    return jsonify(response), 200




@app.route('/transactions/new', methods=['POST'])
def new_transaction():
    values = request.get_json()

    required = ['sender', 'recipient', 'amount']
    if not all(k in values for k in required):
        return 'Missing Values', 400

    # Else -- Create a new transaction
    index = blockchain.new_transaction(values['sender'], values['recipient'])

    response = {'message': f'Transaction will be added to the Block {index}'}
    return jsonify(response), 201

@app.route('/chain', methods=['GET'])
def full_chain():

    response = {
        'chain': blockchain.chain,
        'length': len(blockchain.chain)
    }

    return jsonify(response), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)