//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";


contract SayGm is Ownable {
    string public prompt = "Say Gm";

    struct Answers {
        address from;
        string prompt;
    }

    event NewAnswers (address from, string prompt);

    Answers[] answers;

    function setPrompt(string memory _prompt) public onlyOwner {
        prompt = _prompt;
        delete answers;
    }

    function setAnswers(string memory input) public {
        answers.push(Answers(msg.sender, input));
        
        emit NewAnswers(msg.sender, input);
    }

    function getPrompt() public view returns(string memory) {
        return prompt;
    }

    function getAnswers() public view returns(Answers[] memory) {
        return answers;
    }
    
}