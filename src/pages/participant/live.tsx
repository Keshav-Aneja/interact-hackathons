import { SERVER_ERROR } from '@/config/errors';
import getHandler from '@/handlers/get_handler';
import EditProject from '@/sections/projects/edit_project';
import NewProject from '@/sections/projects/new_project';
import TeamView from '@/screens/participants/team_view';
import { HackathonTeam } from '@/types';
import { initialHackathonTeam } from '@/types/initials';
import Toaster from '@/utils/toaster';
import { Pen } from '@phosphor-icons/react';
import React, { useEffect, useMemo, useState } from 'react';
import Tasks from '@/screens/participants/tasks';
import { currentHackathonSelector } from '@/slices/hackathonSlice';
import { useSelector } from 'react-redux';
import { getHackathonRole } from '@/utils/funcs/hackathons';
import moment from 'moment';
import BaseWrapper from '@/wrappers/base';

const Live = () => {
  const [team, setTeam] = useState<HackathonTeam>(initialHackathonTeam);
  const [index, setIndex] = useState(0);
  const [clickedOnProject, setClickedOnProject] = useState(false);

  const hackathon = useSelector(currentHackathonSelector);

  const getTeam = async () => {
    const URL = `/hackathons/${hackathon.id}/participants/teams`;
    const res = await getHandler(URL);
    if (res.statusCode == 200) {
      const team = res.data.team;
      if (!team) Toaster.error('Team Not Found');
      else setTeam(team);
    } else {
      if (res.data.message) Toaster.error(res.data.message);
      else Toaster.error(SERVER_ERROR);
    }
  };

  const project = useMemo(() => team?.project, [team]);

  useEffect(() => {
    if (!hackathon.id) window.location.replace(`/?redirect_url=${window.location.pathname}`);
    else {
      const role = getHackathonRole();
      if (role != 'participant') window.location.replace('/');
      else {
        // const now = moment();
        // if (now.isBetween(moment(hackathon.teamFormationStartTime), moment(hackathon.teamFormationEndTime)))
        //   window.location.replace('/participant/team');
        // else
        getTeam();
      }
    }
  }, []);

  return (
    <BaseWrapper>
      <div className="w-full min-h-screen bg-[#E1F1FF] p-12 flex flex-col gap-16">
        <div className="w-full flex gap-8">
          <div className="w-full flex-center flex-col gap-2">
            <div className="w-full text-8xl flex-center flex-col font-bold">
              <div className="text-[#607EE7]">Team</div>
              <div className="text-[#4B9EFF]">{team ? team.title : 'Formation'}</div>
            </div>
            <div className="w-fit text-2xl font-medium">Round 1 is Live!</div>
            {team && (
              <div className="font-medium mt-2">
                The Team Code is <span className="underline underline-offset-2">{team.token}</span>
              </div>
            )}
            <div className="w-fit flex-center gap-6 mt-8">
              {(team.projectID ? ['Team', 'Project', 'Tasks'] : ['Team', 'Project']).map((tab, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`${
                    index == i ? 'bg-[#4B9EFF] text-white ' : 'bg-white text-primary_black'
                  } text-lg rounded-3xl py-2 px-10 font-medium cursor-pointer transition-ease-300`}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
        </div>
        {index == 0 && <TeamView team={team} />}
        {index == 1 && (
          <>
            {team?.projectID && project ? (
              <div className="w-full relative bg-gradient-to-b from-[#F6F7F9] to-[#D8EAFF] flex flex-col gap-4 rounded-xl text-primary_black p-8">
                <Pen onClick={() => setClickedOnProject(true)} className="absolute top-4 right-4 cursor-pointer" size={24} />
                {clickedOnProject && <EditProject setShow={setClickedOnProject} projectToEdit={project} setTeam={setTeam} />}
                <div className="text-5xl font-semibold">{project.title}</div>
                <div className="w-fit flex-center gap-4">
                  {project.tags?.map(tag => (
                    <div key={tag} className="bg-white rounded-2xl py-2 px-6 text-sm">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="text-lg">{project.description}</div>
                <div className="w-fit flex-center gap-4">
                  {project.links?.map(link => (
                    <div key={link}>{link}</div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div
                  onClick={() => setClickedOnProject(true)}
                  className="w-fit mx-auto text-3xl font-medium cursor-pointer hover:scale-105 transition-ease-300"
                >
                  Add your Project and Get Started!
                </div>
                {clickedOnProject && <NewProject setShow={setClickedOnProject} setTeam={setTeam} team={team} />}
              </>
            )}
          </>
        )}
        {index == 2 && <Tasks slug={project?.slug || ''} />}
      </div>
    </BaseWrapper>
  );
};

export default Live;
