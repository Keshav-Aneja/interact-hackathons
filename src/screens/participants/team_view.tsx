import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCaption } from '@/components/ui/table';
import { USER_PROFILE_PIC_URL } from '@/config/routes';
import { currentHackathonSelector } from '@/slices/hackathonSlice';
import { userSelector } from '@/slices/userSlice';
import { HackathonTeam, HackathonTrack } from '@/types';
import { ArrowLineRight, PencilLine, Trash } from '@phosphor-icons/react';
import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface Props {
  team: HackathonTeam;
  onLeaveTeam?: () => void;
  onDeleteTeam?: () => void;
  onKickMember?: (userID: string) => void;
  tracks?: HackathonTrack[] | null;
  onUpdateTeam?: (formData: any) => void;
}

const TeamView = ({ team, onLeaveTeam, onDeleteTeam, onKickMember, onUpdateTeam, tracks }: Props) => {
  const user = useSelector(userSelector);
  const [track, setTrack] = useState(team.trackID ?? '');
  const [initialRender, setInitialRender] = useState(true);
  const hackathon = useSelector(currentHackathonSelector);
  useEffect(() => {
    if (track && track.length > 0 && onUpdateTeam) {
      if (!initialRender) {
        onUpdateTeam({
          trackID: track,
          title: team.title,
          hackathonID: team.hackathonID,
        });
      }
    }
    setInitialRender(false);
  }, [track]);
  return (
    <div className="w-full p-6 bg-white rounded-xl shadow-lg transition hover:shadow-xl">
      <div className="w-full flex items-center justify-between">
        {tracks && tracks.length > 0 && (
          <div className="flex items-center gap-2">
            <p className="text-nowrap">Your Track: </p>
            <Select value={track} onValueChange={setTrack}>
              <SelectTrigger className="w-full min-w-40">
                <SelectValue placeholder="Select Track" />
              </SelectTrigger>
              <SelectContent>
                {tracks.map((track, index) => (
                  <SelectItem value={track.id} key={index}>
                    {track.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        <div className="flex items-center gap-5">
          <div>
            Members {team.memberships?.length}/{hackathon.maxTeamSize}
          </div>
          {user.id != team.userID && onLeaveTeam && (
            <Button variant={'destructive'} onClick={onLeaveTeam}>
              Leave Team
              <ArrowLineRight className="ml-2 cursor-pointer" size={20} />
            </Button>
          )}
        </div>
      </div>
      <Table>
        <TableCaption>
          Created By <b>{team.user.name}</b> at {moment(team.createdAt).format('hh:mm a, DD MMMM')}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Joined At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {team.memberships?.map(membership => {
            const member = membership.user;
            return (
              <TableRow key={member.id}>
                <TableCell className="flex items-center gap-2 font-medium">
                  <Image
                    width={50}
                    height={50}
                    src={`${USER_PROFILE_PIC_URL}/${member.profilePic}`}
                    alt={member.username}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex items-center gap-1">
                    <div className="text-lg">{member.name}</div>
                    <div className="text-gray-500">@{member.username}</div>
                  </div>
                </TableCell>
                <TableCell>{membership.role}</TableCell>
                <TableCell>{moment(membership.createdAt).format('hh:mm a, DD MMMM')}</TableCell>
                <TableCell>
                  <div className="w-full h-full flex justify-end gap-4">
                    {member.id != user.id &&
                      (user.id == team.userID ? (
                        <>
                          <PencilLine className="cursor-pointer" size={20} />
                          {onKickMember && (
                            <Trash
                              onClick={() => {
                                if (onKickMember) onKickMember(member.id);
                              }}
                              className="text-primary_danger cursor-pointer"
                              size={20}
                            />
                          )}
                        </>
                      ) : (
                        // onLeaveTeam && <ArrowLineRight onClick={onLeaveTeam} className="text-primary_danger cursor-pointer" size={20} />
                        <></>
                      ))}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeamView;
