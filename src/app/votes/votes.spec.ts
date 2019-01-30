import {Votes} from './Votes';

describe('Votes', () =>{
    it('should increment totalVotes when upvoted', () =>{
        let component = new Votes();
        component.upVote();
        expect(component.totalVotes).toBe(1);
    });

    it('should decrement totalVotes when downvoted', () =>{
        let component = new Votes();
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    });
});

