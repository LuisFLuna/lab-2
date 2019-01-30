export class Votes{
    totalVotes = 0;

    upVote(){
        this.totalVotes++;
    }

    downVote(){
        this.totalVotes--;
    }
}