
const Role = () => {
    return <div class="mb-3">
        <div class="mb-3">
            <h3>{{role.title}}</h3>
            <p class="font-semibold text-primary"> {{role.startDate}} - {{role.endDate}}</p>
            <p><span class="font-semibold mr-1" v-if="role.description">{{
                `${project ? "Project" : "Role"} Description:`
            }}</span><span v-html="role.description ? linkifyHtml(role.description) : ''"></span></p>
        </div>
        <div v-if="role.technologies?.length" class="mb-3">
            <h4>Technologies:</h4>
            <ul class="inline-grid grid-cols-3 lg:grid-cols-8 gap-3 w-full">
                <li class="text-center" v-for="(tech, key) in role.technologies"
                :key="key">
                <i :class="tech.icon" class="text-4xl"/>
                <p>{{tech.title}}</p>
            </li>
        </ul>
    </div>
    <div v-if="role.duties?.length" class="mb-3">
        <h4>Responsibilities:</h4>
        <div class="pl-3">
            <ul>
                <li class="list-disc" v-for="(duty, key) in role.duties"
                :key="key">{{linkifyHtml(duty)}}</li>
        </ul>
    </div>
</div>
    <div v-if="role.projects?.length" class="mb-3">
        <h4>Projects:</h4>
        <div class="pl-3">
            <role
            :role="project" project v-for="(project, idx) in role.projects" :key="idx"/>
        </div>
    </div>
</div>
}
